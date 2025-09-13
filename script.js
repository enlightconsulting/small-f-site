// サイト全体のJavaScript統合版
document.addEventListener('DOMContentLoaded', function() {
    // パララックスエフェクト（スロットリング付き）
    let ticking = false;
    
    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        // ヒーロー背景のパララックス
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        }
        
        // 粒子のパララックス
        const particles = document.querySelector('.particles-container');
        if (particles) {
            particles.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        
        // サービスアイテムのフェードイン
        const serviceItems = document.querySelectorAll('.service-item');
        serviceItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            
            if (rect.top < windowHeight * 0.8) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.transitionDelay = `${index * 0.1}s`;
            }
        });
        
        // 会社概要セクションのパララックス
        const aboutSection = document.querySelector('.about');
        if (aboutSection) {
            const rect = aboutSection.getBoundingClientRect();
            const speed = 0.5;
            aboutSection.style.backgroundPositionY = (rect.top * speed) + 'px';
        }
        
        // 採用ページのパララックス
        const pageHero = document.querySelector('.page-hero');
        if (pageHero) {
            pageHero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        }
        
        // 働き方アイテムのフェードイン
        const workItems = document.querySelectorAll('.work-style-item');
        workItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            
            if (rect.top < windowHeight * 0.8) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.transitionDelay = `${index * 0.15}s`;
            }
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
    
    // ハンバーガーメニュー
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // メニューリンクをクリックしたらメニューを閉じる
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // 初期状態でサービスアイテムを非表示に
    document.querySelectorAll('.service-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
    });
    
    // 初期状態で働き方アイテムを非表示に
    document.querySelectorAll('.work-style-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
    });

    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});