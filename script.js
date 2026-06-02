/**
 * ==========================================================================
 * COVEY COGNITIVE ENGINE v2.0 (script.js)
 * Pusat Otomasi Pengaturan, Kurikulum 3 Tingkat, & Manajemen Sesi Adaptif
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. GERBANG PROTEKSI AKSES HALAMAN
    // Memastikan jika user belum login, mereka tidak bisa bypass ke dashboard langsung
    const isLoggedIn = localStorage.getItem('em_logged_in');
    const currentPath = window.location.pathname;

    // Jika belum login dan mencoba mengakses halaman selain login.html, arahkan ke gerbang masuk
    if (!isLoggedIn && !currentPath.includes('login.html')) {
        window.location.href = 'login.html';
        return;
    }

    // 2. LOAD DATA DARI STORAGE (Harmonisasi dengan index.html & login.html)
    let userXP = parseInt(localStorage.getItem('em_xp')) || 0;
    let todayXP = parseInt(localStorage.getItem('em_today_xp')) || 0;
    let userStreak = parseInt(localStorage.getItem('em_streak')) || 1;
    let username = localStorage.getItem('em_username') || 'Siswa Baru';
    
    // Menggunakan em_start_time sesuai perbaikan timer presisi sebelumnya
    let sessionStart = parseInt(localStorage.getItem('em_start_time'));
    if (!sessionStart) {
        sessionStart = Date.now();
        localStorage.setItem('em_start_time', sessionStart.toString());
    }

    // 3. LOGIKA EVALUASI KURIKULUM 3 TINGKAT (Dinamis Berdasarkan XP)
    let currentTier = "Fundamental (A1-A2)";
    let nextTierRequirement = 500;
    
    if (userXP >= 1500) {
        currentTier = "Mastery (C1-C2) 👑";
        nextTierRequirement = "MAX";
    } else if (userXP >= 500) {
        currentTier = "Intermediate (B1-B2) 🚀";
        nextTierRequirement = 1500;
    }

    // 4. AMBIL & UPDATE ELEMEN ANTARMUKA
    const xpDisplay = document.getElementById('xp-display');
    const streakDisplay = document.getElementById('streak-display');
    const greetingHeader = document.querySelector('.user-greeting h1');
    const subtitleHeader = document.querySelector('.user-greeting p');

    if (xpDisplay) xpDisplay.innerText = `${userXP} XP`;
    if (streakDisplay) streakDisplay.innerText = `${userStreak} Hari`;
    
    // Perbarui teks nama dinamis
    if (greetingHeader) {
        greetingHeader.innerHTML = `Halo, <span id="dashboardName">${username}</span>! 👋`;
    }
    
    // Perbarui label tingkat kurikulum di bawah nama profil
    if (subtitleHeader) {
        subtitleHeader.innerHTML = `Jalur Belajar: <strong style="color: #3b82f6;">${currentTier}</strong>`;
    }

    // 5. PENERAPAN LOGIKA PEMBELAJARAN ADAPTIF (Framework Helper untuk Halaman Kuis)
    window.AdaptiveEngine = {
        calculateBonusXP: (streakCorrectAnswers, timeTakenInSeconds) => {
            let baseXP = 10;
            // Jika user menjawab benar berturut-turut >= 3 kali, berikan pengganda/multiplier
            let multiplier = streakCorrectAnswers >= 3 ? 2 : 1;
            // Jika merespon sangat cepat (<= 5 detik), beri bonus tambahan
            let speedBonus = timeTakenInSeconds <= 5 ? 5 : 0;
            
            return (baseXP * multiplier) + speedBonus;
        },
        determineNextQuestionDifficulty: (currentCorrectCount, currentWrongCount) => {
            if (currentCorrectCount >= 3) return "HARD"; // Naikkan level tantangan
            if (currentWrongCount >= 2) return "EASY";   // Turunkan level agar tidak frustrasi
            return "NORMAL";                             // Mode standar
        }
    };

    // 6. DETEKSI DYNAMIC UNLOCK SYSTEM UNTUK CARD MENU (Kunci Kurikulum)
    const intermediateCard = document.querySelector('a[href="studymode.html?level=intermediate"]');
    const masteryCard = document.querySelector('a[href="studymode.html?level=mastery"]');

    if (intermediateCard && userXP < 500) {
        intermediateCard.style.opacity = "0.5";
        intermediateCard.style.pointerEvents = "none";
        intermediateCard.querySelector('.badge-status').innerHTML = "🔒 Butuh 500 XP";
    }
    if (masteryCard && userXP < 1500) {
        masteryCard.style.opacity = "0.5";
        masteryCard.style.pointerEvents = "none";
        masteryCard.querySelector('.badge-status').innerHTML = "🔒 Butuh 1500 XP";
    }

    // 7. MENU PENGATURAN INTEGRAL (Berfungsi Penuh)
    const btnSettings = document.getElementById('btn-settings');
    if (btnSettings) {
        btnSettings.addEventListener('click', () => {
            const action = prompt(
                `⚙️ MENU PENGATURAN COVEY v2.0\n` +
                `----------------------------------------\n` +
                `Ketik angka opsi yang ingin Anda jalankan:\n\n` +
                `1. Ubah Nama Pengguna\n` +
                `2. Tambah Simulasi +100 XP (Uji Coba Buka Kunci Level)\n` +
                `3. Reset Seluruh Data Progres & Keluar\n\n` +
                `Ketik pilihan Anda (1/2/3):`
            );

            if (action === "1") {
                const newName = prompt("Masukkan nama pengguna baru Anda:", username);
                if (newName && newName.trim() !== "") {
                    localStorage.setItem('em_username', newName.trim());
                    alert("Nama pengguna berhasil diperbarui!");
                    window.location.reload(); // Muat ulang layar untuk sinkronisasi instan
                }
            } 
            else if (action === "2") {
                let currentXP = parseInt(localStorage.getItem('em_xp')) || 0;
                let currentTodayXP = parseInt(localStorage.getItem('em_today_xp')) || 0;
                
                // Menambahkan 100 XP ke total dan progres harian
                localStorage.setItem('em_xp', (currentXP + 100).toString());
                localStorage.setItem('em_today_xp', (currentTodayXP + 100).toString());
                
                alert("Simulasi berhasil! +100 XP ditambahkan ke akun Anda.");
                window.location.reload();
            } 
            else if (action === "3") {
                const doubleCheck = confirm("Apakah Anda benar-benar yakin ingin menghapus semua progres belajar? Tindakan ini tidak dapat dibatalkan.");
                if (doubleCheck) {
                    localStorage.clear();
                    alert("Seluruh data dibersihkan. Mengalihkan ke halaman gerbang masuk...");
                    window.location.href = 'login.html';
                }
            }
            else if (action !== null) {
                alert("Opsi tidak valid. Silakan coba kembali dengan mengetik angka 1, 2, atau 3.");
            }
        });
    }

    // ==========================================================================
    // 8. LOGIKA KAMUS TERJEMAHAN INSTAN & AUTO-TRANSLATE (Untuk kamus.html)
    // ==========================================================================
    // Silakan sesuaikan Selector Class/ID di bawah ini dengan HTML Kamus Anda
    const sourceTextArea = document.querySelector('.kamus-box-left textarea') || document.getElementById('input-text');
    const targetTextArea = document.querySelector('.kamus-box-right textarea') || document.getElementById('output-text');
    const btnSwapLang = document.querySelector('.swap-language-btn') || document.querySelector('.kamus-header button');
    const errorDbMessage = document.querySelector('.error-message') || document.getElementById('db-warning');

    if (sourceTextArea && targetTextArea) {
        let typingTimer;
        const doneTypingInterval = 500; // Delay 500 milidetik (0.5 detik) setelah user berhenti mengetik

        // Fungsi utama untuk memanggil Translation API eksternal
        async function performAutoTranslation(text) {
            // Deteksi arah bahasa secara dinamis berdasarkan elemen UI aktif Anda
            // Contoh default: Cari apakah tab kiri bertuliskan "Indonesia" atau "Inggris"
            const leftTab = document.querySelector('.kamus-box-left .active-tab') || document.querySelector('.kamus-box-left-label');
            let sourceLang = 'en';
            let targetLang = 'id';

            if (leftTab && leftTab.innerText.toLowerCase().includes('indonesia')) {
                sourceLang = 'id';
                targetLang = 'en';
            }

            try {
                targetTextArea.placeholder = "Menerjemahkan...";
                
                // Memanggil MyMemory API Bebas Akses
                const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`);
                const data = await response.json();

                if (data && data.responseData) {
                    targetTextArea.value = data.responseData.translatedText;
                    
                    // Sembunyikan pesan error database terstruktur karena ini mode penerjemahan kalimat bebas
                    if (errorDbMessage) errorDbMessage.style.display = 'none';
                }
            } catch (error) {
                console.error("Gagal melakukan auto-translate:", error);
                targetTextArea.value = "Koneksi internet bermasalah atau limit API tercapai.";
            }
        }

        // Event Listener saat user mengetik di area teks kiri
        sourceTextArea.addEventListener('input', () => {
            clearTimeout(typingTimer);
            const queryText = sourceTextArea.value.trim();

            if (queryText.length === 0) {
                targetTextArea.value = '';
                targetTextArea.placeholder = "Terjemahan";
                if (errorDbMessage) errorDbMessage.style.display = 'none';
                return;
            }

            // Jalankan Debounce: Tunggu user jeda mengetik baru jalankan translasi otomatis
            typingTimer = setTimeout(() => {
                // Pengecekan Hibrida: Jika teks mengandung spasi, itu berarti kalimat (pasti lempar ke API)
                if (queryText.includes(' ')) {
                    performAutoTranslation(queryText);
                } else {
                    // Jika satu kata, sistem bisa memicu fungsi lokal pencari database kata terstruktur milik Anda terlebih dahulu
                    // Contoh pemanggilan fungsi pencari lokal yang mengembalikan true/false:
                    const foundInLocalDB = typeof window.searchLocalDictionary === 'function' ? window.searchLocalDictionary(queryText) : false;
                    
                    // Jika tidak ada di DB lokal, biarkan API Online menerjemahkan kata tunggal tersebut
                    if (!foundInLocalDB) {
                        performAutoTranslation(queryText);
                        // Munculkan kembali peringatan database lokal jika ingin mengedukasi pengguna bahwa kata ini bukan bagian dari kurikulum terstruktur
                        if (errorDbMessage) {
                            errorDbMessage.style.display = 'block';
                            errorDbMessage.innerHTML = `⚠️ Kata terjemahan berasal dari API luar (Belum masuk database kurikulum kami).`;
                        }
                    }
                }
            }, doneTypingInterval);
        });

        // Event listener tambahan jika user menekan tombol Tukar Bahasa (Swap Arrow)
        if (btnSwapLang) {
            btnSwapLang.addEventListener('click', () => {
                // Tukar isi teks kiri dan kanan saat bahasa ditukar
                const tempText = sourceTextArea.value;
                sourceTextArea.value = targetTextArea.value;
                targetTextArea.value = tempText;
                
                // Picu ulang translasi otomatis jika ada teks
                if (sourceTextArea.value.trim() !== "") {
                    performAutoTranslation(sourceTextArea.value.trim());
                }
            });
        }
    }
});

/**
 * ==========================================================================
 * FUNGSI PEMBANTU EKSTERNAL (Utility Functions)
 * ==========================================================================
 */

// Fungsi untuk menambah XP secara global dari halaman mana pun (misal: saat kuis selesai)
window.addGlobalXP = function(amount) {
    let currentXP = parseInt(localStorage.getItem('em_xp')) || 0;
    let todayXP = parseInt(localStorage.getItem('em_today_xp')) || 0;
    
    let newXP = currentXP + amount;
    let newTodayXP = todayXP + amount;
    
    localStorage.setItem('em_xp', newXP.toString());
    localStorage.setItem('em_today_xp', newTodayXP.toString());
    
    // Cari elemen display di layar dan perbarui jika kebetulan sedang dibuka
    const xpDisplay = document.getElementById('xp-display');
    if (xpDisplay) {
        xpDisplay.innerText = `${newXP} XP`;
    }
    
    // Jika fungsi update UI dari dashboard tersedia di halaman, picu pembaruan bar Tantangan
    if (typeof updateDashboardUI === 'function') {
        updateDashboardUI();
    }
};