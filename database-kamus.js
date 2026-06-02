/**
 * ==========================================================================
 * MASTER DICTIONARY DATABASE (database-kamus.js)
 * Tempat Penyimpanan Kosakata Tingkat Tinggi & Kosakata Umum (A1 - C2)
 * Terhubung otomatis dengan Mesin Pencari Instan di kamus.html
 * ==========================================================================
 */

// 1. Kosakata Utama Tingkat Lanjut (Sudah Distandarisasi)
const MasterDictionary = [
    {
        word: "Scrutinize",
        indo: "Memeriksa dengan sangat teliti, mencermati secara mendalam.",
        type: "Verb (Kata Kerja)",
        level: "C2 Mastery",
        example: "The software engineer had to scrutinize every single line of code to locate the memory leak before deployment."
    },
    {
        word: "Paradigm",
        indo: "Paradigma, model, pola, atau kerangka berpikir fundamental.",
        type: "Noun (Kata Benda)",
        level: "C1 Advanced",
        example: "The rise of decentralized technology has created a new paradigm in global financial ecosystems."
    },
    {
        word: "Ubiquitous",
        indo: "Ada di mana-mana pada waktu yang sama, sangat lumrah.",
        type: "Adjective (Kata Sifat)",
        level: "C2 Mastery",
        example: "In this modern era, smartphone applications have become ubiquitous in supporting human productivity."
    },
    {
        word: "Ameliorate",
        indo: "Memperbaiki, membuat keadaan yang buruk menjadi lebih baik.",
        type: "Verb (Kata Kerja)",
        level: "C2 Mastery",
        example: "The project manager implemented a new CSS framework to ameliorate the slow rendering speed on mobile devices."
    },
    {
        word: "Pragmatic",
        indo: "Pragmatis, berorientasi pada hasil praktis daripada teori belaka.",
        type: "Adjective (Kata Sifat)",
        level: "C1 Advanced",
        example: "We need a pragmatic approach to solve this database synchronization issue rather than discussing abstract concepts."
    },
    {
        word: "Epitome",
        indo: "Perwujudan sempurna, contoh terbaik dari suatu hal.",
        type: "Noun (Kata Benda)",
        level: "C2 Mastery",
        example: "Her clean and highly structural HTML code is the epitome of professional web development."
    },
    {
        word: "Ambiguous",
        indo: "Ambigu, bermakna ganda, tidak jelas atau membingungkan.",
        type: "Adjective (Kata Sifat)",
        level: "B2 Upper-Int",
        example: "The compiler rejected the function script because the variable declaration was too ambiguous."
    },
    {
        word: "Meticulous",
        indo: "Sangat teliti, cermat, memerhatikan detail sekecil apa pun.",
        type: "Adjective (Kata Sifat)",
        level: "C1 Advanced",
        example: "The UI Designer was very meticulous about the pixel spacing and color contrast ratio on the login page."
    },

    {
        word: "dress",
        indo: "gaun, baju", // Bisa taruh beberapa kata dipisah koma
        type: "Nomina (Kata Benda)", 
        level: "A1 Beginner",
        example: "She is wearing a beautiful blue dress."
    },
    {
        word: "shirt",
        indo: "kemeja, baju, kaus",
        type: "Nomina (Kata Benda)", 
        level: "A1 Beginner",
        example: "I need to wash my shirt."
    }
    // Tambahkan kosakata lainnya di sini...
];

// 2. Kumpulan Kosakata Tambahan (A1 - B2)
const rawExtraWords = [
    { word: "Ability", indo: "Kemampuan", type: "Noun (Kata Benda)", level: "A2 Essential", example: "He has the amazing ability to learn new programming languages quickly." },
    { word: "Able", indo: "Mampu", type: "Adjective (Kata Sifat)", level: "A2 Essential" },
    { word: "About", indo: "Tentang", type: "Preposition (Kata Depan)", level: "A1 Foundation" },
    { word: "Above", indo: "Di atas", type: "Preposition (Kata Depan)", level: "A1 Foundation" },
    { word: "Accept", indo: "Menerima", type: "Verb (Kata Kerja)", level: "A2 Essential" },
    { word: "Accident", indo: "Kecelakaan", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Account", indo: "Akun", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Across", indo: "Menyeberangi", type: "Preposition (Kata Depan)", level: "A2 Essential" },
    { word: "Act", indo: "Bertindak", type: "Verb (Kata Kerja)", level: "A2 Essential" },
    { word: "Action", indo: "Tindakan", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Active", indo: "Aktif", type: "Adjective (Kata Sifat)", level: "A2 Essential" },
    { word: "Activity", indo: "Aktivitas", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Actor", indo: "Aktor", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Add", indo: "Menambahkan", type: "Verb (Kata Kerja)", level: "A1 Foundation" },
    { word: "Address", indo: "Alamat", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Admit", indo: "Mengakui", type: "Verb (Kata Kerja)", level: "B1 Intermediate" },
    { word: "Adult", indo: "Dewasa", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Advice", indo: "Nasihat", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Afraid", indo: "Takut", type: "Adjective (Kata Sifat)", level: "A1 Foundation" },
    { word: "After", indo: "Setelah", type: "Preposition (Kata Depan)", level: "A1 Foundation" },
    { word: "Afternoon", indo: "Sore", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Again", indo: "Lagi", type: "Adverb (Kata Keterangan)", level: "A1 Foundation" },
    { word: "Against", indo: "Melawan", type: "Preposition (Kata Depan)", level: "B1 Intermediate" },
    { word: "Age", indo: "Usia", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Ago", indo: "Yang lalu", type: "Adverb (Kata Keterangan)", level: "A1 Foundation" },
    { word: "Agree", indo: "Setuju", type: "Verb (Kata Kerja)", level: "A1 Foundation" },
    { word: "Air", indo: "Udara", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Airport", indo: "Bandara", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "All", indo: "Semua", type: "Determiner", level: "A1 Foundation" },
    { word: "Allow", indo: "Mengizinkan", type: "Verb (Kata Kerja)", level: "B1 Intermediate" },
    { word: "Almost", indo: "Hampir", type: "Adverb (Kata Keterangan)", level: "A2 Essential" },
    { word: "Alone", indo: "Sendiri", type: "Adjective (Kata Sifat)", level: "A2 Essential" },
    { word: "Along", indo: "Sepanjang", type: "Preposition (Kata Depan)", level: "A2 Essential" },
    { word: "Already", indo: "Sudah", type: "Adverb (Kata Keterangan)", level: "A2 Essential" },
    { word: "Also", indo: "Juga", type: "Adverb (Kata Keterangan)", level: "A1 Foundation" },
    { word: "Always", indo: "Selalu", type: "Adverb (Kata Keterangan)", level: "A1 Foundation" },
    { word: "Amazing", indo: "Menakjubkan", type: "Adjective (Kata Sifat)", level: "A2 Essential" },
    { word: "Among", indo: "Di antara", type: "Preposition (Kata Depan)", level: "A2 Essential" },
    { word: "Amount", indo: "Jumlah", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Angry", indo: "Marah", type: "Adjective (Kata Sifat)", level: "A1 Foundation" },
    { word: "Animal", indo: "Hewan", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Another", indo: "Yang lain", type: "Determiner", level: "A1 Foundation" },
    { word: "Answer", indo: "Jawaban", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Any", indo: "Apa pun", type: "Determiner", level: "A1 Foundation" },
    { word: "Anyone", indo: "Siapa saja", type: "Pronoun (Kata Ganti)", level: "A1 Foundation" },
    { word: "Anything", indo: "Apa saja", type: "Pronoun (Kata Ganti)", level: "A1 Foundation" },
    { word: "Apartment", indo: "Apartemen", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Appear", indo: "Muncul", type: "Verb (Kata Kerja)", level: "A2 Essential" },
    { word: "Apple", indo: "Apel", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Apply", indo: "Menerapkan", type: "Verb (Kata Kerja)", level: "A2 Essential" },
    { word: "Area", indo: "Area", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Arm", indo: "Lengan", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Around", indo: "Sekitar", type: "Preposition (Kata Depan)", level: "A1 Foundation" },
    { word: "Arrive", indo: "Tiba", type: "Verb (Kata Kerja)", level: "A1 Foundation" },
    { word: "Art", indo: "Seni", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Article", indo: "Artikel", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Artist", indo: "Seniman", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Ask", indo: "Bertanya", type: "Verb (Kata Kerja)", level: "A1 Foundation" },
    { word: "At", indo: "Di", type: "Preposition (Kata Depan)", level: "A1 Foundation" },
    { word: "Attack", indo: "Serangan", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Attempt", indo: "Percobaan", type: "Noun (Kata Benda)", level: "B1 Intermediate" },
    { word: "Attention", indo: "Perhatian", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Attractive", indo: "Menarik", type: "Adjective (Kata Sifat)", level: "A2 Essential" },
    { word: "Audience", indo: "Penonton", type: "Noun (Kata Benda)", level: "B1 Intermediate" },
    { word: "Author", indo: "Penulis", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Available", indo: "Tersedia", type: "Adjective (Kata Sifat)", level: "A2 Essential" },
    { word: "Avoid", indo: "Menghindari", type: "Verb (Kata Kerja)", level: "A2 Essential" },
    { word: "Away", indo: "Jauh", type: "Adverb (Kata Keterangan)", level: "A1 Foundation" },
    { word: "Baby", indo: "Bayi", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Back", indo: "Kembali", type: "Adverb / Noun", level: "A1 Foundation" },
    { word: "Bad", indo: "Buruk", type: "Adjective (Kata Sifat)", level: "A1 Foundation" },
    { word: "Bag", indo: "Tas", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Ball", indo: "Bola", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Bank", indo: "Bank", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Bar", indo: "Batang", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Base", indo: "Dasar", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Basic", indo: "Dasar", type: "Adjective (Kata Sifat)", level: "A2 Essential" },
    { word: "Basket", indo: "Keranjang", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Bath", indo: "Mandi", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Bathroom", indo: "Kamar mandi", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Be", indo: "Menjadi", type: "Verb (Kata Kerja)", level: "A1 Foundation" },
    { word: "Beach", indo: "Pantai", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Beautiful", indo: "Cantik", type: "Adjective (Kata Sifat)", level: "A1 Foundation" },
    { word: "Because", indo: "Karena", type: "Conjunction (Kata Sambung)", level: "A1 Foundation" },
    { word: "Become", indo: "Menjadi", type: "Verb (Kata Kerja)", level: "A1 Foundation" },
    { word: "Bed", indo: "Tempat tidur", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Bedroom", indo: "Kamar tidur", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Beer", indo: "Bir", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Before", indo: "Sebelum", type: "Preposition (Kata Depan)", level: "A1 Foundation" },
    { word: "Begin", indo: "Memulai", type: "Verb (Kata Kerja)", level: "A1 Foundation" },
    { word: "Behavior", indo: "Perilaku", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Behind", indo: "Di belakang", type: "Preposition (Kata Depan)", level: "A1 Foundation" },
    { word: "Believe", indo: "Percaya", type: "Verb (Kata Kerja)", level: "A1 Foundation" },
    { word: "Below", indo: "Di bawah", type: "Preposition (Kata Depan)", level: "A1 Foundation" },
    { word: "Best", indo: "Terbaik", type: "Adjective (Kata Sifat)", level: "A1 Foundation" },
    { word: "Better", indo: "Lebih baik", type: "Adjective (Kata Sifat)", level: "A1 Foundation" },
    { word: "Between", indo: "Di antara", type: "Preposition (Kata Depan)", level: "A1 Foundation" },
    { word: "Beyond", indo: "Melebihi", type: "Preposition (Kata Depan)", level: "B1 Intermediate" },
    { word: "Big", indo: "Besar", type: "Adjective (Kata Sifat)", level: "A1 Foundation" },
    { word: "Bill", indo: "Tagihan", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Bird", indo: "Burung", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Birth", indo: "Kelahiran", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Black", indo: "Hitam", type: "Adjective (Kata Sifat)", level: "A1 Foundation" },
    { word: "Blood", indo: "Darah", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Blue", indo: "Biru", type: "Adjective (Kata Sifat)", level: "A1 Foundation" },
    { word: "Board", indo: "Papan", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Boat", indo: "Perahu", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Body", indo: "Tubuh", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Book", indo: "Buku", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Border", indo: "Batas", type: "Noun (Kata Benda)", level: "B1 Intermediate" },
    { word: "Born", indo: "Lahir", type: "Verb (Kata Kerja)", level: "A1 Foundation" },
    { word: "Borrow", indo: "Meminjam", type: "Verb (Kata Kerja)", level: "A2 Essential" },
    { word: "Boss", indo: "Bos", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Both", indo: "Keduanya", type: "Determiner", level: "A1 Foundation" },
    { word: "Bottle", indo: "Botol", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Bottom", indo: "Bawah", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Box", indo: "Kotak", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Boy", indo: "Anak laki-laki", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Brain", indo: "Otak", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Branch", indo: "Cabang", type: "Noun (Kata Benda)", level: "B1 Intermediate" },
    
    // Rentang Akhir (981 - 1000)
    { word: "Youth", indo: "Pemuda", type: "Noun (Kata Benda)", level: "B1 Intermediate" },
    { word: "Zebra", indo: "Zebra", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Zero", indo: "Nol", type: "Number (Angka)", level: "A1 Foundation" },
    { word: "Zone", indo: "Zona", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Zoom", indo: "Memperbesar", type: "Verb (Kata Kerja)", level: "A2 Essential" },
    { word: "Able-bodied", indo: "Bertubuh sehat", type: "Adjective (Kata Sifat)", level: "B2 Upper-Int" },
    { word: "Backpack", indo: "Tas ransel", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Calculator", indo: "Kalkulator", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Dangerous", indo: "Berbahaya", type: "Adjective (Kata Sifat)", level: "A1 Foundation" },
    { word: "Elephant", indo: "Gajah", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Fantastic", indo: "Fantastis", type: "Adjective (Kata Sifat)", level: "A2 Essential" },
    { word: "Gentleman", indo: "Pria sopan", type: "Noun (Kata Benda)", level: "B1 Intermediate" },
    { word: "Happiness", indo: "Kebahagiaan", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Important", indo: "Penting", type: "Adjective (Kata Sifat)", level: "A1 Foundation" },
    { word: "Journey", indo: "Perjalanan", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Knowledge", indo: "Pengetahuan", type: "Noun (Kata Benda)", level: "A2 Essential" },
    { word: "Language", indo: "Bahasa", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Mountain", indo: "Gunung", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Notebook", indo: "Buku catatan", type: "Noun (Kata Benda)", level: "A1 Foundation" },
    { word: "Opportunity", indo: "Kesempatan", type: "Noun (Kata Benda)", level: "B1 Intermediate" },
    { word: "Consequence", indo: "Konsekuensi / Akibat dari perbuatan", type: "Noun (Kata Benda)", level: "B1 Intermediate", example: "Every decision you make comes with its own unique consequence." },
    { word: "Significant", indo: "Signifikan / Berarti penting / Berdampak besar", type: "Adjective (Kata Sifat)", level: "B2 Upper-Int", example: "The new interface design led to a significant increase in user engagement." },
    { word: "Simultaneous", indo: "Simultan / Terjadi serempak pada waktu bersamaan", type: "Adjective (Kata Sifat)", level: "C1 Advanced", example: "The system supports simultaneous log-ins from multiple unique devices." },
    { word: "Incorporate", indo: "Memasukkan / Menggabungkan unsur", type: "Verb (Kata Kerja)", level: "B2 Upper-Int", example: "We can incorporate gamification elements into the learning platform." },
    { word: "Exaggerate", indo: "Melebih-lebihkan sesuatu", type: "Verb (Kata Kerja)", level: "B2 Upper-Int", example: "Try to present facts clearly without the need to exaggerate the numbers." },
    { word: "Feasible", indo: "Layak / Mungkin dilakukan secara praktis", type: "Adjective (Kata Sifat)", level: "C1 Advanced", example: "Building a fully functional web-app in one day is challenging but feasible." },
    { word: "Profound", indo: "Mendalam / Sangat hebat pengaruhnya", type: "Adjective (Kata Sifat)", level: "C1 Advanced", example: "The mentor's presentation left a profound impact on the youth audience." },
    { word: "Accurate", indo: "Akurat / Tepat / Teliti", type: "Adjective (Kata Sifat)", level: "B1 Intermediate", example: "Make sure to provide accurate data during the registration process." },
    { word: "Comprehensive", indo: "Komprehensif / Menyeluruh / Lengkap", type: "Adjective (Kata Sifat)", level: "C1 Advanced", example: "The platform offers a comprehensive guide to understanding English verbs." },
    { word: "Diverse", indo: "Beragam / Bermacam-macam", type: "Adjective (Kata Sifat)", level: "B2 Upper-Int", example: "The student group consists of people from highly diverse backgrounds." },
    { word: "Enhance", indo: "Meningkatkan kualitas / Mempercantik", type: "Verb (Kata Kerja)", level: "B2 Upper-Int", example: "You can use custom CSS animations to enhance the user experience." },
    { word: "Fundamental", indo: "Mendasar / Pokok / Fundamental", type: "Adjective (Kata Sifat)", level: "B2 Upper-Int", example: "Understanding variables and loops is a fundamental skill in coding." },
    { word: "Incentive", indo: "Insentif / Pendorong / Tambahan semangat", type: "Noun (Kata Benda)", level: "B2 Upper-Int", example: "Daily streaks act as a great incentive for users to keep learning." },
    { word: "Leap", indo: "Lompatan besar / Melompat jauh", type: "Noun / Verb", level: "B1 Intermediate", example: "Pivoting from a native mobile application to a web format was a major leap." },
    { word: "Nuance", indo: "Nuansa / Perbedaan yang sangat kecil/halus", type: "Noun (Kata Benda)", level: "C1 Advanced", example: "Advanced learners need to understand the structural nuance between synonyms." },
    { word: "Obtain", indo: "Memperoleh / Mendapatkan sesuatu", type: "Verb (Kata Kerja)", level: "B2 Upper-Int", example: "You need to complete identity verification to obtain access to your assets." },
    { word: "Sufficient", indo: "Cukup / Memadai untuk suatu kebutuhan", type: "Adjective (Kata Sifat)", level: "B2 Upper-Int", example: "A one-week trial period is sufficient to test the basic functions." },
    { word: "Tangible", indo: "Nyata / Jelas / Dapat dirasakan bentuknya", type: "Adjective (Kata Sifat)", level: "C1 Advanced", example: "Consistent practice yields tangible results in your language fluency." },
    { word: "Ultimate", indo: "Pamungkas / Akhir / Paling utama", type: "Adjective (Kata Sifat)", level: "B2 Upper-Int", example: "Our ultimate goal is to launch the beta release by the end of this semester." },
    { word: "Vague", indo: "Samar-samar / Tidak jelas pembatasannya", type: "Adjective (Kata Sifat)", level: "B2 Upper-Int", example: "The error message was too vague, making it quite difficult to debug." },
    { word: "Discipline", indo: "Disiplin / Kepatuhan pada aturan", type: "Noun (Kata Benda)", level: "B1 Intermediate", example: "Self-discipline is the bridge between goals and accomplishment." },
    { word: "Prioritize", indo: "Memprioritaskan / Mendahulukan hal penting", type: "Verb (Kata Kerja)", level: "B2 Upper-Int", example: "You must learn to prioritize tasks based on their urgency." },
    { word: "Efficiency", indo: "Efisiensi / Kedayagunaan", type: "Noun (Kata Benda)", level: "B2 Upper-Int", example: "Automation improves our efficiency and saves a lot of time." },
    { word: "Ambition", indo: "Ambisi / Keinginan kuat untuk sukses", type: "Noun (Kata Benda)", level: "B1 Intermediate", example: "His ambition is to build a platform that promotes digital literacy." },
    { word: "Habit", indo: "Kebiasaan", type: "Noun (Kata Benda)", level: "A2 Essential", example: "Reading a few pages of a book every day is a highly beneficial habit." },
    { word: "Focus", indo: "Fokus / Pemusatan perhatian", type: "Noun / Verb", level: "A2 Essential", example: "Deep focus allows you to finish complex tasks in less time." },
    { word: "Productive", indo: "Produktif / Menghasilkan banyak karya", type: "Adjective (Kata Sifat)", level: "B1 Intermediate", example: "Being busy is not the same thing as being genuinely productive." },
    { word: "Motivation", indo: "Motivasi / Alasan / Dorongan", type: "Noun (Kata Benda)", level: "B1 Intermediate", example: "Discipline will sustain you on days when your motivation is gone." },
    { word: "Growth", indo: "Pertumbuhan / Perkembangan", type: "Noun (Kata Benda)", level: "B1 Intermediate", example: "Personal growth often happens outside of your comfort zone." },
    { word: "Clarity", indo: "Kejelasan / Kejernihan pikiran", type: "Noun (Kata Benda)", level: "B2 Upper-Int", example: "Setting clear goals gives you the mental clarity needed to move forward." },
    { word: "Evaluate", indo: "Mengevaluasi / Menilai perkembangan", type: "Verb (Kata Kerja)", level: "B2 Upper-Int", example: "At the end of every week, take a moment to evaluate your progress." },
    { word: "Aspiration", indo: "Aspirasi / Cita-cita / Harapan", type: "Noun (Kata Benda)", level: "B2 Upper-Int", example: "The workshop aims to guide teenagers toward their true aspirations." },
    { word: "Perspective", indo: "Sudut pandang / Perspektif", type: "Noun (Kata Benda)", level: "B2 Upper-Int", example: "Traveling around different regions expands your perspective on life." },
    { word: "Potential", indo: "Potensi / Kemampuan terpendam", type: "Noun (Kata Benda)", level: "B1 Intermediate", example: "Continuous effort is the key to unlocking your full potential." },
    { word: "Accountable", indo: "Bertanggung jawab / Dapat diandalkan", type: "Adjective (Kata Sifat)", level: "C1 Advanced", example: "Holding yourself accountable is crucial for long-term self-improvement." }



];

// 3. Proses Penggabungan Otomatis & Pembuatan Kalimat Contoh Dinamis
rawExtraWords.forEach(item => {
    // Logika fallback: Jika kata belum memiliki kalimat contoh (example), 
    // sistem akan merangkai kalimat instruksional yang lebih natural.
    let generatedExample = item.example;
    
    if (!generatedExample) {
        if (item.type.includes("Verb")) {
            generatedExample = `Make sure to ${item.word.toLowerCase()} clearly when communicating in English.`;
        } else if (item.type.includes("Adjective")) {
            generatedExample = `It is highly ${item.word.toLowerCase()} to grasp this concept for your daily conversation.`;
        } else {
            generatedExample = `The word '${item.word}' is a common term you will frequently encounter.`;
        }
    }

    MasterDictionary.push({
        word: item.word,
        type: item.type || "General Word",
        level: item.level || "Uncategorized",
        indo: item.indo,
        example: generatedExample
    });
});

// Baris pengeksporan modular (opsional untuk lingkungan Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MasterDictionary;
}