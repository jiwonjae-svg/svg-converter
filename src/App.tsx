import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Sparkles } from 'lucide-react';
import { 
  Header, 
  Footer, 
  Dropzone, 
  ImageList, 
  Settings, 
  Results 
} from './components';
import { useAppStore } from './store';
import { getTranslation } from './i18n';
import { convertImageToSvg, conversionRateLimiter } from './utils';
import toast from 'react-hot-toast';
import './App.css';

/**
 * 메인 애플리케이션 컴포넌트
 */
const App: React.FC = () => {
  const { 
    theme, 
    language,
    images, 
    settings,
    isProcessing,
    setProcessing,
    updateImageStatus,
    addResult 
  } = useAppStore();
  
  const t = getTranslation(language);

  // 테마 적용
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // 변환 처리
  const handleConvert = async () => {
    const pendingImages = images.filter(img => img.status === 'idle');
    
    if (pendingImages.length === 0) {
      toast.error(t.errors.noImages);
      return;
    }

    // Rate limiting 체크
    if (!conversionRateLimiter.canProceed()) {
      toast.error('Too many requests. Please wait a moment.');
      return;
    }

    setProcessing(true);

    for (const image of pendingImages) {
      try {
        updateImageStatus(image.id, 'processing');
        
        const result = await convertImageToSvg(image, settings);
        addResult(result);
        
        updateImageStatus(image.id, 'completed');
      } catch (error) {
        console.error('Conversion error:', error);
        updateImageStatus(image.id, 'error', t.errors.conversionFailed);
        toast.error(`${image.file.name}: ${t.errors.conversionFailed}`);
      }
    }

    setProcessing(false);
    toast.success('Conversion completed!');
  };

  const pendingCount = images.filter(img => img.status === 'idle').length;

  return (
    <div className="app">
      <Header />
      
      <main className="main">
        <div className="container">
          {/* 히어로 섹션 */}
          <section className="hero">
            <h2 className="hero-title">{t.app.title}</h2>
            <p className="hero-description">{t.app.description}</p>
          </section>

          {/* 업로드 섹션 */}
          <section className="upload-section">
            <Dropzone />
            <ImageList />
          </section>

          {/* 설정 섹션 */}
          <section className="settings-section">
            <Settings />
          </section>

          {/* 변환 버튼 */}
          <section className="convert-section">
            <button
              className="btn btn-primary btn-lg btn-convert"
              onClick={handleConvert}
              disabled={isProcessing || pendingCount === 0}
            >
              {isProcessing ? (
                <>
                  <div className="spinner spinner-white" />
                  {t.actions.converting}
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  {t.actions.convert}
                  {pendingCount > 0 && (
                    <span className="btn-badge">{pendingCount}</span>
                  )}
                </>
              )}
            </button>
          </section>

          {/* 결과 섹션 */}
          <Results />
        </div>
      </main>

      <Footer />

      {/* 토스트 알림 */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)',
            borderRadius: '0.5rem',
          },
        }}
      />
    </div>
  );
};

export default App;
