// ハンバーガーメニューの制御
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navMenu = document.getElementById('navMenu');

// ハンバーガーメニュー（モバイル）
if (hamburgerMenu && navMenu) {
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// ナビゲーションリンクのクリック時にメニューを閉じてスクロール（モバイル）
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // メニューを閉じる
        if (hamburgerMenu && navMenu) {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
        
        // スクロール先を取得
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // スムーススクロール（ScrollToPluginを使用）
            gsap.to(window, {
                duration: 1.5,
                scrollTo: {
                    y: targetElement,
                    offsetY: 0
                },
                ease: "power2.inOut"
            });
        }
    });
});

// デスクトップヘッダーナビゲーション
document.querySelectorAll('.header-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // スクロール先を取得
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // スムーススクロール
            gsap.to(window, {
                duration: 1.5,
                scrollTo: {
                    y: targetElement,
                    offsetY: 60 // ヘッダー分のオフセット
                },
                ease: "power2.inOut"
            });
        }
    });
});

// // ロゴクリックでトップに戻る
// document.querySelector('.logo')?.addEventListener('click', (e) => {
//     e.preventDefault();
//     gsap.to(window, {
//         duration: 1.5,
//         scrollTo: {
//             y: 0,
//             offsetY: 0
//         },
//         ease: "power2.inOut"
//     });
// });

// GSAP登録
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ヒーローセクションアニメーション（最強フワッと感）
const heroTl = gsap.timeline({ delay: 0.2 }); // 少し遅延を追加

heroTl
    // 1. RISA'S を最初に表示（フワッと感最大）
    .to(".hero-title", {
        opacity: 1,
        y: 0,
        scale: 1, // スケールも戻す
        duration: 1.2,
        ease: "power1.out" // 最もソフト
    })
    // 2. Portfolio を次に表示（重なりながらフワッと）
    .to(".portfolio-main", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power1.out"
    }, "-=0.8") // 大きく重なって開始
    // 3. テキストを表示（重なりながらフワッと）
    .to(".portfolio-text", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.3,
        ease: "power1.out"
    }, "-=0.7") // 重なって開始
    // 4. 丸いアイコンを最後に表示（特にフワッと弾む）
    .to(".profile-circle", {
        opacity: 1,
        scale: 1,
        rotation: 0, // 回転を戻す
        duration: 1.8, // 最も長く
        ease: "elastic.out(1, 0.5)" // 弾力のあるフワッと感
    }, "-=0.6"); // 重なって開始

// セクションタイトルアニメーション
gsap.utils.toArray(".section-title, .contact-title").forEach(title => {
    gsap.to(title, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
});

// Works項目アニメーション
gsap.utils.toArray(".work-item").forEach((item, index) => {
    gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
        }
    });
});

// Aboutセクションアニメーション（修正版）
gsap.to(".about-image", {
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
    }
});

// プロフィールテキスト部分
gsap.to(".about-right", {
    opacity: 1,
    x: 0,
    duration: 1.2,
    delay: 0.2, // 短縮
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
    }
});

// スキルタイトル（新規追加）
gsap.to(".skills-title", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.4, // プロフィールテキストの直後
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
    }
});

// スキルリストアニメーション（修正版）
gsap.utils.toArray(".skills-list li").forEach((skill, index) => {
    gsap.to(skill, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.08 + 0.6, // 大幅短縮
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    });
});

// Contactテキストアニメーション（修正版）
gsap.utils.toArray(".contact-text, .contact-description").forEach((text, index) => {
    gsap.to(text, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.15, // 短縮
        ease: "power2.out",
        scrollTrigger: {
            trigger: text,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
        }
    });
});

// Contactアイコンアニメーション（修正版）
gsap.utils.toArray(".contact-icon").forEach((icon, index) => {
    gsap.to(icon, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: index * 0.1 + 0.25, // 大幅短縮
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".contact-section",
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
        }
    });
});

// パララックス効果
gsap.to(".profile-circle", {
    y: -100,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});

// ホバーアニメーション
document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// スムーススクロール（その他のリンク用）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: target,
                ease: "power2.inOut"
            });
        }
    });
});

// ページロード時の初期化（フワッと感のための初期設定）
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    
    // ヒーロー要素の初期状態をより大きく移動させる
    gsap.set(".hero-title", {
        opacity: 0,
        y: 80, // より大きく下から
        scale: 0.9 // 少し小さく開始
    });
    
    gsap.set(".portfolio-main", {
        opacity: 0,
        y: 80,
        scale: 0.9
    });
    
    gsap.set(".portfolio-text", {
        opacity: 0,
        y: 60,
        scale: 0.95
    });
    
    gsap.set(".profile-circle", {
        opacity: 0,
        scale: 0.3, // より小さく開始
        rotation: -10 // 少し回転
    });
    
    // スキルタイトルの初期状態（新規追加）
    gsap.set(".skills-title", {
        opacity: 0,
        y: 20
    });
    
    // その他の初期状態
    gsap.set(".skills-list li", {
        opacity: 0,
        y: 20
    });
    
    gsap.set(".contact-icon", {
        opacity: 0,
        scale: 0
    });
    
    // アニメーション開始
    heroTl.play();
});