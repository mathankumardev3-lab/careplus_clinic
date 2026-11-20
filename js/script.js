 at bottom (Doctor/Service sync,
                            Appointment validation, Live clinic open/closed clock,
                            Interactive vector map, FAQ accordion, WhatsApp links)
       - assets/         -> Custom inline brand SVGs & curated medical imagery
  ======================================================================== -->

  <style>
    /* ======================================================================
       css/style.css - Custom Design System & Micro-interactions
    ====================================================================== */
    :root {
      --color-white: #FFFFFF;
      --color-sky: #EAF5FF;
      --color-blue: #2996D6;
      --color-teal: #18A999;
      --color-text: #253347;
    }

    body {
      font-family: 'Inter', sans-serif;
      color: var(--color-text);
      background-color: var(--color-white);
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6, .font-heading {
      font-family: 'Plus Jakarta Sans', sans-serif;
    }

    /* Subtle Hero & Section Gradients */
    .hero-gradient {
      background: linear-gradient(135deg, #EAF5FF 0%, #F5FAFF 55%, #E6F8F6 100%);
    }

    .cta-banner-gradient {
      background: linear-gradient(110deg, #2996D6 0%, #1F8AC7 50%, #18A999 100%);
    }

    .glass-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(41, 150, 214, 0.14);
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #F4F8FC;
    }
    ::-webkit-scrollbar-thumb {
      background: #B8D8F0;
      border-radius: 9999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #2996D6;
    }

    /* FAQ Smooth Accordion */
    .faq-answer {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.32s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .faq-item.active .faq-answer {
      grid-template-rows: 1fr;
    }
    .faq-answer-inner {
      overflow: hidden;
    }
    .faq-chevron {
      transition: transform 0.3s ease;
    }
    .faq-item.active .faq-chevron {
      transform: rotate(180deg);
    }

    /* Floating Pulse Animation */
    @keyframes softPulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.06); opacity: 0.9; }
    }
    .animate-soft-pulse {
      animation: softPulse 3s infinite ease-in-out;
    }

    /* Interactive Map Pin Ripple */
    @keyframes mapRipple {
      0% { transform: scale(0.8); opacity: 0.85; }
      100% { transform: scale(2.4); opacity: 0; }
    }
    .map-pin-ripple {
      animation: mapRipple 2.2s infinite ease-out;
    }

    /* Form Focus & Error States */
    .input-field {
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
    .input-field:focus {
      outline: none;
      border-color: #2996D6;
      box-shadow: 0 0 0 4px rgba(41, 150, 214, 0.14);
    }
    .input-error {
      border-color: #E11D48 !important;
      box-shadow: 0 0 0 3px rgba(225, 29, 72, 0.12) !important;
    }

    /* Time Slot Pill Active State */
    .time-slot-btn.selected {
      background-color: #2996D6;
      color: #FFFFFF;
      border-color: #2996D6;
      box-shadow: 0 6px 16px -4px rgba(41, 150, 214, 0.45);
    }
  </style>
</head>
<body class="text-brand-slate bg-white selection:bg-brand-blue selection:text-white">

  <!-- ======================================================================
       SECTION 1: TOP CONTACT BAR
  ====================================================================== -->
  <div class="bg-brand-slate text-white text-xs sm:text-sm border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col lg:flex-row items-center justify-between gap-2">
      <!-- Left Contact Details -->
      <div class="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-1.5 text-slate-200">
        <a href="tel:+15552348910" class="inline-flex items-center gap-1.5 hover:text-brand-teal transition-colors">
          <i data-lucide="phone" class="w-3.5 h-3.5 text-brand-teal"></i>
          <span>+1 (555) 234-8910</span>
        </a>
        <a href="mailto:care@careplusclinic.example" class="inline-flex items-center gap-1.5 hover:text-brand-teal transition-colors">
          <i data-lucide="mail" class="w-3.5 h-3.5 text-brand-teal"></i>
          <span>care@careplusclinic.example</span>
        </a>
        <span class="hidden md:inline-flex items-center gap-1.5 text-slate-300">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-brand-blue"></i>
          <span>450 Wellness Blvd, Suite 200, Brookside</span>
        </span>
      </div>

      <!-- Right Emergency Notice & Social/WhatsApp Links -->
      <div class="flex flex-wrap items-center justify-center gap-4">
        <span class="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-0.5 rounded-full text-xs font-medium text-sky-200">
          <span class="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
          Same-Day Urgent Care Available • Emergency? Call 911
        </span>
        <div class="flex items-center gap-2.5">
          <a href="https://wa.me/15552348910?text=Hello%20CarePlus%20Clinic%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment." target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" class="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200 font-medium transition-colors">
            <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
            <span class="hidden sm:inline">WhatsApp</span>
          </a>
          <span class="text-white/20">|</span>
          <a href="#contact" aria-label="Instagram" class="text-slate-300 hover:text-white transition-colors">
            <i data-lucide="instagram" class="w-3.5 h-3.5"></i>
          </a>
          <a href="#contact" aria-label="LinkedIn" class="text-slate-300 hover:text-white transition-colors">
            <i data-lucide="linkedin" class="w-3.5 h-3.5"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- ======================================================================
       SECTION 2: STICKY RESPONSIVE NAVIGATION
  ====================================================================== -->
  <header id="navbar" class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-shadow duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Custom SVG Brand Logo + Wordmark -->
        <a href="#" class="flex items-center gap-3 group focus:outline-none">
          <div class="w-11 h-11 rounded-2xl bg-brand-sky flex items-center justify-center border border-brand-blue/20 group-hover:scale-105 transition-transform">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="12.5" y="3" width="7" height="26" rx="3.5" fill="#2996D6"/>
              <rect x="3" y="12.5" width="26" height="7" rx="3.5" fill="#18A999"/>
              <circle cx="16" cy="16" r="3" fill="#FFFFFF"/>
            </svg>
          </div>
          <div>
            <span class="font-heading font-extrabold text-xl tracking-tight text-brand-slate block leading-none">
              CAREPLUS <span class="text-brand-blue">CLINIC</span>
            </span>
            <span class="text-[11px] font-medium text-brand-teal tracking-wide block mt-1">
              Care That Makes a Difference.
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden lg:flex items-center gap-7 text-sm font-medium text-brand-slate" aria-label="Primary Navigation">
          <a href="#about" class="hover:text-brand-blue transition-colors py-2">About</a>
          <a href="#services" class="hover:text-brand-blue transition-colors py-2">Services</a>
          <a href="#doctors" class="hover:text-brand-blue transition-colors py-2">Doctors</a>
          <a href="#facilities" class="hover:text-brand-blue transition-colors py-2">Facilities</a>
          <a href="#timings" class="hover:text-brand-blue transition-colors py-2">Timings</a>
          <a href="#faq" class="hover:text-brand-blue transition-colors py-2">FAQ</a>
          <a href="#contact" class="hover:text-brand-blue transition-colors py-2">Contact</a>
        </nav>

        <!-- Primary Action & Mobile Toggle -->
        <div class="flex items-center gap-3">
          <a href="#booking" class="hidden sm:inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blueDark text-white font-semibold text-sm px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all">
            <i data-lucide="calendar-check" class="w-4 h-4"></i>
            <span>Book Appointment</span>
          </a>

          <!-- Mobile Hamburger Button -->
          <button id="mobile-menu-btn" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Toggle Menu" class="lg:hidden p-2.5 rounded-xl text-brand-slate hover:bg-brand-sky transition-colors">
            <i id="menu-icon-open" data-lucide="menu" class="w-6 h-6"></i>
            <i id="menu-icon-close" data-lucide="x" class="w-6 h-6 hidden"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Slide-Down Drawer -->
    <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-slate-100 shadow-xl">
      <div class="px-4 pt-3 pb-6 space-y-1.5">
        <a href="#about" class="mobile-nav-link block px-4 py-3 rounded-xl text-base font-medium text-brand-slate hover:bg-brand-sky hover:text-brand-blue">About Clinic</a>
        <a href="#services" class="mobile-nav-link block px-4 py-3 rounded-xl text-base font-medium text-brand-slate hover:bg-brand-sky hover:text-brand-blue">Medical Services</a>
        <a href="#doctors" class="mobile-nav-link block px-4 py-3 rounded-xl text-base font-medium text-brand-slate hover:bg-brand-sky hover:text-brand-blue">Our Doctors</a>
        <a href="#facilities" class="mobile-nav-link block px-4 py-3 rounded-xl text-base font-medium text-brand-slate hover:bg-brand-sky hover:text-brand-blue">Facilities</a>
        <a href="#timings" class="mobile-nav-link block px-4 py-3 rounded-xl text-base font-medium text-brand-slate hover:bg-brand-sky hover:text-brand-blue">Clinic Timings</a>
        <a href="#faq" class="mobile-nav-link block px-4 py-3 rounded-xl text-base font-medium text-brand-slate hover:bg-brand-sky hover:text-brand-blue">FAQ</a>
        <a href="#contact" class="mobile-nav-link block px-4 py-3 rounded-xl text-base font-medium text-brand-slate hover:bg-brand-sky hover:text-brand-blue">Location & Contact</a>
        <div class="pt-3 px-2">
          <a href="#booking" class="mobile-nav-link w-full flex items-center justify-center gap-2 bg-brand-blue text-white font-semibold py-3.5 rounded-xl shadow-md">
            <i data-lucide="calendar-plus" class="w-5 h-5"></i>
            <span>Book Appointment Now</span>
          </a>
        </div>
      </div>
    </div>
  </header>

  <main>
    <!-- ======================================================================
         SECTION 3: HERO SECTION (Asymmetric 2-Column on #EAF5FF Soft Gradient)
    ====================================================================== -->
    <section class="hero-gradient relative overflow-hidden pt-10 pb-16 lg:py-20">
      <!-- Decorative Soft Blurs -->
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 -left-20 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <!-- Left Column: Copy & CTAs (7 cols) -->
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2.5 bg-white px-4 py-2 rounded-full shadow-soft border border-brand-blue/15">
              <span class="w-2.5 h-2.5 rounded-full bg-brand-teal"></span>
              <span class="text-xs sm:text-sm font-semibold text-brand-slate">Accepting New Patients • Walk-Ins & Scheduled Visits</span>
            </div>

            <h1 class="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[54px] text-brand-slate leading-[1.12] tracking-tight">
              Modern Family &amp; Specialty Healthcare Built Around <span class="text-brand-blue">Your Wellbeing.</span>
            </h1>

            <p class="text-lg sm:text-xl font-semibold text-brand-teal">
              “Care That Makes a Difference.”
            </p>

            <p class="text-base sm:text-lg text-brand-slateLight max-w-2xl leading-relaxed">
              Experience unhurried consultations, advanced outpatient diagnostics, and compassionate specialists across six core medical departments—all under one welcoming roof.
            </p>

            <!-- Dual CTAs -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a href="#booking" class="inline-flex items-center justify-center gap-2.5 bg-brand-blue hover:bg-brand-blueDark text-white font-semibold px-7 py-4 rounded-2xl shadow-card hover:-translate-y-0.5 transition-all text-base">
                <i data-lucide="calendar-check" class="w-5 h-5"></i>
                <span>Book Appointment</span>
              </a>
              <a href="#services" class="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-brand-slate font-semibold px-7 py-4 rounded-2xl border border-slate-200 shadow-soft transition-all text-base">
                <span>Explore Services</span>
                <i data-lucide="arrow-right" class="w-4 h-4 text-brand-blue"></i>
              </a>
            </div>

            <!-- Quick Trust Strip -->
            <div class="pt-4 flex flex-wrap items-center gap-6 text-sm text-brand-slateLight">
              <div class="flex items-center gap-2">
                <i data-lucide="shield-check" class="w-5 h-5 text-brand-teal"></i>
                <span>Most Major Insurances Accepted</span>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="clock" class="w-5 h-5 text-brand-blue"></i>
                <span>On-Site Lab &amp; Imaging</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Photography + Patient Satisfaction Metric Card (5 cols) -->
          <div class="lg:col-span-5 relative">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=900&q=80"
                alt="Friendly CarePlus Clinic doctor consulting warmly with a patient"
                onerror="this.src='https://placehold.co/800x920/EAF5FF/253347?text=CarePlus+Clinic+Care'"
                class="w-full h-[420px] sm:h-[490px] object-cover object-center"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-brand-slate/40 via-transparent to-transparent"></div>
            </div>

            <!-- Floating Patient Satisfaction Trust Metric Card -->
            <div class="glass-card rounded-2xl p-4 sm:p-5 shadow-xl max-w-[280px] sm:max-w-xs -mt-14 sm:-mt-16 ml-4 sm:-ml-8 relative z-20">
              <div class="flex items-center gap-3.5">
                <div class="w-12 h-12 rounded-2xl bg-brand-teal/15 text-brand-teal flex items-center justify-center shrink-0">
                  <i data-lucide="heart-handshake" class="w-6 h-6"></i>
                </div>
                <div>
                  <div class="flex items-center gap-1 text-amber-400">
                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    <span class="text-brand-slate font-bold text-sm ml-1">4.9/5</span>
                  </div>
                  <p class="font-heading font-bold text-brand-slate text-sm mt-0.5">98.6% Patient Satisfaction</p>
                  <p class="text-xs text-brand-slateLight">Based on 4,200+ verified clinic visits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         SECTION 4: APPOINTMENT CTA BANNER
    ====================================================================== -->
    <section aria-label="Quick Appointment Banner" class="py-6 px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
      <div class="max-w-7xl mx-auto cta-banner-gradient rounded-3xl p-6 sm:p-8 lg:px-12 shadow-glow text-white flex flex-col lg:flex-row items-center justify-between gap-6">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
          <div class="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0">
            <i data-lucide="stethoscope" class="w-7 h-7 text-white"></i>
          </div>
          <div>
            <span class="inline-block text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full mb-2">
              Same-Day &amp; Next-Day Slots Open
            </span>
            <h2 class="font-heading font-bold text-2xl sm:text-3xl leading-snug">
              Need a Prompt Medical Consultation Today?
            </h2>
            <p class="text-sky-50 text-sm sm:text-base mt-1 max-w-2xl">
              Skip long hospital waiting rooms. Reserve an exact time slot online in under 60 seconds or connect with our care desk on WhatsApp.
            </p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
          <a href="#booking" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-brand-slate hover:bg-brand-sky font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm sm:text-base">
            <span>Schedule Now</span>
            <i data-lucide="arrow-down-right" class="w-4 h-4 text-brand-blue"></i>
          </a>
          <a href="tel:+15552348910" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-slate/25 hover:bg-brand-slate/40 text-white border border-white/25 font-semibold px-5 py-3.5 rounded-xl transition-all text-sm sm:text-base">
            <i data-lucide="phone-call" class="w-4 h-4"></i>
            <span>+1 (555) 234-8910</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         SECTION 5: CLINIC INTRODUCTION ("About CarePlus Clinic")
    ====================================================================== -->
    <section id="about" class="py-20 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <!-- Left Photo Collage (5 cols) -->
          <div class="lg:col-span-5 relative">
            <div class="rounded-3xl overflow-hidden shadow-card border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80"
                alt="Bright, calming reception and consultation interior at CarePlus Clinic"
                onerror="this.src='https://placehold.co/800x700/EAF5FF/253347?text=Modern+Clinic+Interior'"
                class="w-full h-[410px] object-cover"
              />
            </div>
            <!-- Accent Badge -->
            <div class="bg-brand-sky border border-brand-blue/20 rounded-2xl p-5 mt-5 flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center shrink-0">
                <i data-lucide="award" class="w-6 h-6"></i>
              </div>
              <div>
                <p class="font-heading font-bold text-brand-slate text-base">Accredited Outpatient Excellence</p>
                <p class="text-sm text-brand-slateLight">Modern digital health records, low-radiation diagnostics &amp; calming private suites.</p>
              </div>
            </div>
          </div>

          <!-- Right Story & Stats (7 cols) -->
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-widest bg-brand-sky px-3.5 py-1.5 rounded-full">
              <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
              <span>About CarePlus Clinic</span>
            </div>

            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-brand-slate leading-tight">
              Healthcare Designed to Feel Human, Calm, and Thorough.
            </h2>

            <p class="text-brand-slateLight text-base sm:text-lg leading-relaxed">
              Founded with a clear mission—<strong class="text-brand-slate font-semibold">“Care That Makes a Difference”</strong>—CAREPLUS CLINIC bridges the gap between sterile hospital systems and rushed urgent-care walk-ins. We combine evidence-based medicine with genuine personal attention.
            </p>

            <p class="text-brand-slateLight text-base leading-relaxed">
              Every consultation includes clear explanations, transparent care plans, and seamless coordination between our six outpatient specialties and in-house diagnostic laboratory—so you leave with answers, not confusion.
            </p>

            <!-- 4 Key Clinic Metrics -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div class="bg-brand-sky/60 border border-brand-blue/10 rounded-2xl p-4 text-center">
                <span class="font-heading font-extrabold text-2xl sm:text-3xl text-brand-blue block">15+</span>
                <span class="text-xs sm:text-sm font-medium text-brand-slate mt-1 block">Years Serving Community</span>
              </div>
              <div class="bg-brand-sky/60 border border-brand-blue/10 rounded-2xl p-4 text-center">
                <span class="font-heading font-extrabold text-2xl sm:text-3xl text-brand-teal block">6</span>
                <span class="text-xs sm:text-sm font-medium text-brand-slate mt-1 block">Specialized Departments</span>
              </div>
              <div class="bg-brand-sky/60 border border-brand-blue/10 rounded-2xl p-4 text-center">
                <span class="font-heading font-extrabold text-2xl sm:text-3xl text-brand-blue block">25k+</span>
                <span class="text-xs sm:text-sm font-medium text-brand-slate mt-1 block">Happy Patients</span>
              </div>
              <div class="bg-brand-sky/60 border border-brand-blue/10 rounded-2xl p-4 text-center">
                <span class="font-heading font-extrabold text-2xl sm:text-3xl text-brand-teal block">4.9★</span>
                <span class="text-xs sm:text-sm font-medium text-brand-slate mt-1 block">Patient Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         SECTION 6: MEDICAL SERVICES (6-Card Interactive Grid)
    ====================================================================== -->
    <section id="services" class="py-20 lg:py-24 bg-brand-sky/45 border-y border-brand-blue/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span class="inline-flex items-center gap-2 text-brand-teal font-bold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full shadow-soft">
            <i data-lucide="layers" class="w-3.5 h-3.5"></i>
            <span>Comprehensive Outpatient Care</span>
          </span>
          <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-brand-slate">
            Our Medical Departments &amp; Services
          </h2>
          <p class="text-brand-slateLight text-base sm:text-lg">
            Select any specialty below to immediately pre-fill your appointment request with the corresponding department specialist.
          </p>
        </div>

        <!-- 6 Service Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <!-- 1. General Medicine -->
          <article class="bg-white rounded-3xl p-7 shadow-soft hover:shadow-card border border-slate-100 hover:border-brand-blue/30 transition-all flex flex-col justify-between group">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-brand-sky text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors flex items-center justify-center mb-6">
                <i data-lucide="stethoscope" class="w-7 h-7"></i>
              </div>
              <h3 class="font-heading font-bold text-xl text-brand-slate mb-2.5">General Medicine</h3>
              <p class="text-sm text-brand-slateLight leading-relaxed mb-4">
                Primary adult care, preventive health screenings, chronic condition management, and rapid acute illness evaluation.
              </p>
              <ul class="space-y-2 text-xs font-medium text-brand-slate mb-6">
                <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-brand-teal"></i> Annual Executive Wellness Checkups</li>
                <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-brand-teal"></i> Diabetes, Thyroid &amp; Hypertension Care</li>
                <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-brand-teal"></i> Immunizations &amp; Travel Health</li>
              </ul>
            </div>
            <button type="button" data-select-service="General Medicine" class="book-service-btn w-full inline-flex items-center justify-center gap-2 bg-brand-sky hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-sm py-3 px-4 rounded-xl transition-colors">
              <span>Book this Specialty</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </article>

          <!-- 2. Cardiology -->
          <article class="bg-white rounded-3xl p-7 shadow-soft hover:shadow-card border border-slate-100 hover:border-brand-blue/30 transition-all flex flex-col justify-between group">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-teal-50 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors flex items-center justify-center mb-6">
                <i data-lucide="heart-pulse" class="w-7 h-7"></i>
              </div>
              <h3 class="font-heading font-bold text-xl text-brand-slate mb-2.5">Cardiology</h3>
              <p class="text-sm text-brand-slateLight leading-relaxed mb-4">
                Preventive cardiovascular medicine and non-invasive heart diagnostics designed for early detection and lifelong heart vitality.
              </p>
              <ul class="space-y-2 text-xs font-medium text-brand-slate mb-6">
                <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-brand-teal"></i> 12-Lead ECG &amp; 2D Echocardiography</li>
                <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-brand-teal"></i> Holter Rhythm &amp; BP Monitoring</li>
                <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-brand-teal"></i> Lipid &amp; Cardiac Risk Prevention</li>
              </ul>
            </div>
            <button type="button" data-select-service="Cardiology" class="book-service-btn w-full inline-flex items-center justify-center gap-2 bg-brand-sky hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-sm py-3 px-4 rounded-xl transition-colors">
              <span>Book this Specialty</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </article>

          <!-- 3. Dermatology -->
          <article class="bg-white rounded-3xl p-7 shadow-soft hover:shadow-card border border-slate-100 hover:border-brand-blue/30 transition-all flex flex-col justify-between group">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-brand-sky text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors flex items-center justify-center mb-6">
                <i data-lucide="sparkles" class="w-7 h-7"></i>
              </div>
              <h3 class="font-heading font-bold text-xl text-brand-slate mb-2.5">Dermatology</h3>
              <p class="text-sm text-brand-slateLight leading-relaxed mb-4">
                Medical and aesthetic skin, hair, and nail care utilizing gentle, evidence-backed therapies for all skin tones and ages.
              </p>
              <ul class="space-y-2 text-xs font-medium text-brand-slate mb-6">
                <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-brand-teal"></i> Full-Body Mole &amp; Skin Screenings</li>
                <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-brand-teal"></i> Acne, Eczema &amp; Psoriasis Protocols</li>
                <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-brand-teal"></i> Hair Loss &amp; Scalp Health Diagnostics</li>
              </ul>
            </div>
            <button type="button" data-select-service="Dermatology" class="book-service-btn w-full inline-flex items-center justify-center gap-2 bg-brand-sky hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-sm py-3 px-4 rounded-xl transition-colors">
              <span>Book this Specialty</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </article>

          <!-- 4. Orthopedics -->
          <article class="bg-white rounded-3xl p-7 shadow-soft hover:shadow-card border border-slate-100 hover:border-brand-blue/30 transition-all flex flex-col justify-between group">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-teal-50 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors flex items-center justify-center mb-6">
                <i data-lucide="bone" class="w-7 h-7"></i>
              </div>
              <h3 class="font-heading font-bold text-xl text-brand-slate mb-2.5">Orthopedics</h3>
              <p class="text-sm text-brand-slateLight leading-relaxed mb-4">
                Restoring pain-free movement for joints, spine, and sports injuries with non-surgical rehabilitation and targeted relief.
              </p>
              <ul class="space-y-2 text-xs font-medium text-brand-slate mb-6">
                <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-brand-teal"></i> Sports Injury &amp; Ligament Assessment</li>
                <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-brand-teal"></i> Joint Pain, Arthritis &amp; Back Care</li>
                <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-brand-teal"></i> Digital X-Ray &amp; Mobility Therapy Plans</li>
              </ul>
            </div>
            <button type="button" data-select-service="Orthopedics" class="book-service-btn w-full inline-flex items-center justify-center gap-2 bg-brand-sky hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-sm py-3 px-4 rounded-xl transition-colors">
              <span>Book this Specialty</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </article>

          <!-- 5. Pediatrics -->
          <article class="bg-white rounded-3xl p-7 shadow-soft hover:shadow-card border border-slate-100 hover:border-brand-blue/30 transition-all flex flex-col justify-between group">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-brand-sky text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors flex items-center justify-center mb-6">
                <i data-lucide="baby" class="w-7 h-7"></i>
              </div>
              <h3 class="font-heading font-bold text-xl text-brand-slate mb-2.5">Pediatrics</h3>
              <p class="text-sm text-brand-slateLight leading-relaxed mb-4">
                Gentle, fear-free healthcare for newborns, children, and teens in a bright, family-friendly pediatric wing.
              </p>
              <ul class="space-y-2 text-xs font-medium text-brand-slate mb-6">
                <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-brand-teal"></i> Well-Child Growth &amp; Milestone Visits</li>
                <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-brand-teal"></i> Childhood Immunization Schedules</li>
                <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-brand-teal"></i> Pediatric Allergy, Asthma &amp; Nutrition</li>
              </ul>
            </div>
            <button type="button" data-select-service="Pediatrics" class="book-service-btn w-full inline-flex items-center justify-center gap-2 bg-brand-sky hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-sm py-3 px-4 rounded-xl transition-colors">
              <span>Book this Specialty</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </article>

          <!-- 6. Dental Care -->
          <article class="bg-white rounded-3xl p-7 shadow-soft hover:shadow-card border border-slate-100 hover:border-brand-blue/30 transition-all flex flex-col justify-between group">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-teal-50 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors flex items-center justify-center mb-6">
                <i data-lucide="smile" class="w-7 h-7"></i>
              </div>
              <h3 class="font-heading font-bold text-xl text-brand-slate mb-2.5">Dental Care</h3>
              <p class="text-sm text-brand-slateLight leading-relaxed mb-4">
                Pain-minimized preventive, restorative, and cosmetic dentistry with digital 3D imaging and gentle hygiene care.
              </p>
              <ul class="space-y-2 text-xs font-medium text-brand-slate mb-6">
                <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-brand-teal"></i> Ultrasonic Cleaning &amp; Oral Exams</li>
                <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-brand-teal"></i> Tooth-Colored Restorations &amp; Whitening</li>
                <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-brand-teal"></i> Same-Day Toothache &amp; Emergency Relief</li>
              </ul>
            </div>
            <button type="button" data-select-service="Dental Care" class="book-service-btn w-full inline-flex items-center justify-center gap-2 bg-brand-sky hover:bg-brand-blue text-brand-blue hover:text-white font-semibold text-sm py-3 px-4 rounded-xl transition-colors">
              <span>Book this Specialty</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </article>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         SECTION 7: DOCTOR PROFILES (6 Fictional Specialists)
    ====================================================================== -->
    <section id="doctors" class="py-20 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div class="space-y-3 max-w-2xl">
            <span class="inline-flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-widest bg-brand-sky px-3.5 py-1.5 rounded-full">
              <i data-lucide="users" class="w-3.5 h-3.5"></i>
              <span>Meet Our Clinical Team</span>
            </span>
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-brand-slate">
              Compassionate Specialists Dedicated to You
            </h2>
            <p class="text-brand-slateLight text-base">
              Our fictional clinical team brings together approachable bedside manner and focused outpatient expertise.
            </p>
          </div>
          <a href="#booking" class="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blueDark font-semibold text-sm">
            <span>View All Open Appointment Slots</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>

        <!-- 6 Doctor Cards Grid (Populated via JS & Enhanced with Static Fallback) -->
        <div id="doctors-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Rendered dynamically from DOCTOR_DATA in script.js for guaranteed sync -->
        </div>
      </div>
    </section>

    <!-- ======================================================================
         SECTION 8: APPOINTMENT BOOKING (Split Layout + Interactive Validation)
    ====================================================================== -->
    <section id="booking" class="py-20 lg:py-24 bg-brand-sky/55 border-y border-brand-blue/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <!-- Left Guidance & Insurance Column (5 cols) -->
          <div class="lg:col-span-5 space-y-6">
            <span class="inline-flex items-center gap-2 text-brand-teal font-bold text-xs uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full shadow-soft">
              <i data-lucide="calendar-heart" class="w-3.5 h-3.5"></i>
              <span>Instant Online Scheduling</span>
            </span>

            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-brand-slate leading-tight">
              Book Your Visit at CAREPLUS CLINIC
            </h2>

            <p class="text-brand-slateLight text-base leading-relaxed">
              Choose your preferred medical department, specialist, date, and time slot. You will receive an instant booking confirmation reference right away.
            </p>

            <!-- Step-by-Step Guidance Card -->
            <div class="bg-white rounded-3xl p-6 shadow-soft border border-slate-100 space-y-4">
              <h3 class="font-heading font-bold text-lg text-brand-slate">What to Expect</h3>
              <div class="flex items-start gap-3.5">
                <div class="w-8 h-8 rounded-lg bg-brand-sky text-brand-blue font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">1</div>
                <div>
                  <p class="font-semibold text-sm text-brand-slate">Zero Waiting-Room Guesswork</p>
                  <p class="text-xs text-brand-slateLight mt-0.5">Arrive just 10 minutes before your selected slot for digital check-in.</p>
                </div>
              </div>
              <div class="flex items-start gap-3.5">
                <div class="w-8 h-8 rounded-lg bg-teal-50 text-brand-teal font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">2</div>
                <div>
                  <p class="font-semibold text-sm text-brand-slate">Insurance &amp; Transparent Self-Pay</p>
                  <p class="text-xs text-brand-slateLight mt-0.5">We accept BlueCross, Aetna, Cigna, UnitedHealthcare, Medicare &amp; transparent flat-rate visits.</p>
                </div>
              </div>
              <div class="flex items-start gap-3.5">
                <div class="w-8 h-8 rounded-lg bg-brand-sky text-brand-blue font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">3</div>
                <div>
                  <p class="font-semibold text-sm text-brand-slate">Free Rescheduling</p>
                  <p class="text-xs text-brand-slateLight mt-0.5">Plans change—modify or cancel anytime via phone or WhatsApp at no fee.</p>
                </div>
              </div>
            </div>

            <!-- Direct Help Card -->
            <div class="bg-brand-slate text-white rounded-3xl p-6 flex items-center justify-between gap-4">
              <div>
                <p class="text-xs uppercase tracking-wider text-brand-teal font-bold">Prefer Assistance?</p>
                <p class="font-heading font-bold text-lg mt-0.5">Book via WhatsApp Desk</p>
                <p class="text-xs text-slate-300 mt-1">Average response time under 3 minutes</p>
              </div>
              <a href="https://wa.me/15552348910?text=Hello%20CarePlus%20Clinic%2C%20I%20need%20help%20booking%20an%20appointment." target="_blank" rel="noopener noreferrer" class="bg-brand-teal hover:bg-brand-tealDark text-white p-3.5 rounded-2xl shadow-glow transition-transform hover:scale-105 shrink-0" aria-label="Message CarePlus Clinic on WhatsApp">
                <i data-lucide="message-circle" class="w-6 h-6"></i>
              </a>
            </div>
          </div>

          <!-- Right Interactive Booking Form Card (7 cols) -->
          <div class="lg:col-span-7">
            <div class="bg-white rounded-3xl p-6 sm:p-9 shadow-card border border-slate-100">
              <form id="appointment-form" novalidate class="space-y-5">
                <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 class="font-heading font-bold text-xl text-brand-slate">Patient Appointment Details</h3>
                    <p class="text-xs text-brand-slateLight mt-0.5">Fields marked with <span class="text-rose-500">*</span> are required</p>
                  </div>
                  <span class="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-brand-teal bg-teal-50 px-3 py-1 rounded-full">
                    <i data-lucide="lock" class="w-3.5 h-3.5"></i> HIPAA-Safe Form
                  </span>
                </div>

                <!-- Row 1: Full Name & Phone -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="patient-name" class="block text-sm font-semibold text-brand-slate mb-1.5">
                      Patient Full Name <span class="text-rose-500">*</span>
                    </label>
                    <input type="text" id="patient-name" name="patientName" placeholder="e.g., Jordan Taylor" required
                      class="input-field w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-slate placeholder:text-slate-400" />
                    <p id="error-patient-name" class="text-xs text-rose-600 mt-1 hidden"></p>
                  </div>

                  <div>
                    <label for="patient-phone" class="block text-sm font-semibold text-brand-slate mb-1.5">
                      Phone Number <span class="text-rose-500">*</span>
                    </label>
                    <input type="tel" id="patient-phone" name="patientPhone" placeholder="e.g., (555) 389-2041" required
                      class="input-field w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-slate placeholder:text-slate-400" />
                    <p id="error-patient-phone" class="text-xs text-rose-600 mt-1 hidden"></p>
                  </div>
                </div>

                <!-- Row 2: Email Address -->
                <div>
                  <label for="patient-email" class="block text-sm font-semibold text-brand-slate mb-1.5">
                    Email Address <span class="text-rose-500">*</span>
                  </label>
                  <input type="email" id="patient-email" name="patientEmail" placeholder="jordan.taylor@example.com" required
                    class="input-field w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-slate placeholder:text-slate-400" />
                  <p id="error-patient-email" class="text-xs text-rose-600 mt-1 hidden"></p>
                </div>

                <!-- Row 3: Department / Specialty & Doctor Selector -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="specialty-select" class="block text-sm font-semibold text-brand-slate mb-1.5">
                      Department / Specialty <span class="text-rose-500">*</span>
                    </label>
                    <select id="specialty-select" name="specialty" required
                      class="input-field w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-slate bg-white">
                      <option value="">Select a Department</option>
                      <option value="General Medicine">General Medicine</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Dermatology">Dermatology</option>
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Pediatrics">Pediatrics</option>
                      <option value="Dental Care">Dental Care</option>
                    </select>
                    <p id="error-specialty" class="text-xs text-rose-600 mt-1 hidden"></p>
                  </div>

                  <div>
                    <label for="doctor-select" class="block text-sm font-semibold text-brand-slate mb-1.5">
                      Preferred Doctor <span class="text-rose-500">*</span>
                    </label>
                    <select id="doctor-select" name="doctor" required
                      class="input-field w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-slate bg-white">
                      <option value="">Select a Doctor</option>
                    </select>
                    <p id="error-doctor" class="text-xs text-rose-600 mt-1 hidden"></p>
                  </div>
                </div>

                <!-- Row 4: Preferred Date -->
                <div>
                  <label for="appointment-date" class="block text-sm font-semibold text-brand-slate mb-1.5">
                    Preferred Date <span class="text-rose-500">*</span>
                  </label>
                  <input type="date" id="appointment-date" name="appointmentDate" required
                    class="input-field w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-slate bg-white" />
                  <p id="error-date" class="text-xs text-rose-600 mt-1 hidden"></p>
                </div>

                <!-- Row 5: Interactive Time Slot Pill Selector -->
                <div>
                  <label class="block text-sm font-semibold text-brand-slate mb-2">
                    Preferred Time Slot <span class="text-rose-500">*</span>
                  </label>
                  <input type="hidden" id="selected-time-slot" name="timeSlot" value="" />
                  <div id="time-slots-container" class="grid grid-cols-2 sm:grid-cols-3 gap-2.5" role="radiogroup" aria-label="Select Appointment Time Slot">
                    <button type="button" data-time="09:00 AM" class="time-slot-btn py-2.5 px-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-brand-slate hover:border-brand-blue hover:bg-brand-sky/50 transition-all">
                      09:00 AM
                    </button>
                    <button type="button" data-time="10:30 AM" class="time-slot-btn py-2.5 px-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-brand-slate hover:border-brand-blue hover:bg-brand-sky/50 transition-all">
                      10:30 AM
                    </button>
                    <button type="button" data-time="12:00 PM" class="time-slot-btn py-2.5 px-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-brand-slate hover:border-brand-blue hover:bg-brand-sky/50 transition-all">
                      12:00 PM
                    </button>
                    <button type="button" data-time="02:30 PM" class="time-slot-btn py-2.5 px-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-brand-slate hover:border-brand-blue hover:bg-brand-sky/50 transition-all">
                      02:30 PM
                    </button>
                    <button type="button" data-time="04:00 PM" class="time-slot-btn py-2.5 px-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-brand-slate hover:border-brand-blue hover:bg-brand-sky/50 transition-all">
                      04:00 PM
                    </button>
                    <button type="button" data-time="05:30 PM" class="time-slot-btn py-2.5 px-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-brand-slate hover:border-brand-blue hover:bg-brand-sky/50 transition-all">
                      05:30 PM
                    </button>
                  </div>
                  <p id="error-time" class="text-xs text-rose-600 mt-1.5 hidden"></p>
                </div>

                <!-- Row 6: Optional Notes / Symptoms -->
                <div>
                  <label for="patient-notes" class="block text-sm font-semibold text-brand-slate mb-1.5">
                    Reason for Visit / Symptoms <span class="text-xs font-normal text-brand-slateLight">(Optional)</span>
                  </label>
                  <textarea id="patient-notes" name="notes" rows="3" placeholder="Briefly describe your symptoms, checkup goals, or any questions for the doctor..."
                    class="input-field w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-slate placeholder:text-slate-400"></textarea>
                </div>

                <!-- Submit Button -->
                <button type="submit" class="w-full bg-brand-blue hover:bg-brand-blueDark text-white font-bold py-4 px-6 rounded-2xl shadow-card hover:shadow-lg transition-all flex items-center justify-center gap-2.5 text-base">
                  <i data-lucide="check-circle" class="w-5 h-5"></i>
                  <span>Confirm Appointment Booking</span>
                </button>
              </form>

              <!-- Interactive Booking Confirmation Card (Hidden until successful submit) -->
              <div id="booking-confirmation" class="hidden space-y-6 py-2">
                <div class="bg-teal-50/80 border border-brand-teal/30 rounded-2xl p-6 text-center space-y-2">
                  <div class="w-14 h-14 rounded-full bg-brand-teal text-white flex items-center justify-center mx-auto shadow-glow">
                    <i data-lucide="check" class="w-8 h-8"></i>
                  </div>
                  <span class="inline-block text-xs font-bold uppercase tracking-wider text-brand-teal bg-white px-3 py-1 rounded-full">
                    Booking Confirmed
                  </span>
                  <h3 class="font-heading font-extrabold text-2xl text-brand-slate">
                    Your Visit Is Reserved!
                  </h3>
                  <p class="text-sm text-brand-slateLight">
                    Reference ID: <strong id="conf-ref-id" class="text-brand-blue font-mono">CP-84920</strong>
                  </p>
                </div>

                <div class="bg-brand-sky/50 rounded-2xl p-5 border border-brand-blue/15 space-y-3 text-sm">
                  <div class="flex justify-between py-1.5 border-b border-slate-200/70">
                    <span class="text-brand-slateLight">Patient Name</span>
                    <span id="conf-name" class="font-bold text-brand-slate"></span>
                  </div>
                  <div class="flex justify-between py-1.5 border-b border-slate-200/70">
                    <span class="text-brand-slateLight">Department</span>
                    <span id="conf-specialty" class="font-semibold text-brand-blue"></span>
                  </div>
                  <div class="flex justify-between py-1.5 border-b border-slate-200/70">
                    <span class="text-brand-slateLight">Assigned Specialist</span>
                    <span id="conf-doctor" class="font-bold text-brand-slate"></span>
                  </div>
                  <div class="flex justify-between py-1.5 border-b border-slate-200/70">
                    <span class="text-brand-slateLight">Date &amp; Time</span>
                    <span id="conf-datetime" class="font-bold text-brand-teal"></span>
                  </div>
                  <div class="flex justify-between py-1.5">
                    <span class="text-brand-slateLight">Confirmation Sent To</span>
                    <span id="conf-contact" class="font-medium text-brand-slate"></span>
                  </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-3">
                  <a id="conf-whatsapp-btn" href="#" target="_blank" rel="noopener noreferrer" class="flex-1 inline-flex items-center justify-center gap-2 bg-brand-teal hover:bg-brand-tealDark text-white font-semibold py-3.5 px-5 rounded-xl shadow-sm transition-all text-sm">
                    <i data-lucide="message-circle" class="w-4 h-4"></i>
                    <span>Send Details via WhatsApp</span>
                  </a>
                  <button type="button" id="book-another-btn" class="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-brand-slate border border-slate-200 font-semibold py-3.5 px-5 rounded-xl transition-all text-sm">
                    <i data-lucide="rotate-ccw" class="w-4 h-4 text-brand-blue"></i>
                    <span>Book Another Visit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         SECTION 9: CLINIC FACILITIES (4-Card Visual Showcase)
    ====================================================================== -->
    <section id="facilities" class="py-20 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span class="inline-flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-widest bg-brand-sky px-3.5 py-1.5 rounded-full">
            <i data-lucide="building-2" class="w-3.5 h-3.5"></i>
            <span>Modern Infrastructure</span>
          </span>
          <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-brand-slate">
            State-of-the-Art Outpatient Facilities
          </h2>
          <p class="text-brand-slateLight text-base">
            Thoughtfully designed clinical spaces equipped with fast diagnostics and soothing patient lounges.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Facility 1 -->
          <div class="group rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-soft hover:shadow-card transition-all">
            <div class="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=700&q=80"
                alt="Digital Diagnostic Lab at CarePlus Clinic"
                onerror="this.src='https://placehold.co/600x400/EAF5FF/253347?text=Diagnostic+Lab'"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 text-brand-blue flex items-center justify-center shadow-sm">
                <i data-lucide="microscope" class="w-5 h-5"></i>
              </div>
            </div>
            <div class="p-5">
              <h3 class="font-heading font-bold text-lg text-brand-slate mb-1.5">Digital Diagnostic Lab</h3>
              <p class="text-xs sm:text-sm text-brand-slateLight leading-relaxed">
                Automated hematology and biochemistry analyzers delivering same-day digital lab reports straight to your inbox.
              </p>
            </div>
          </div>

          <!-- Facility 2 -->
          <div class="group rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-soft hover:shadow-card transition-all">
            <div class="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=80"
                alt="Modern Imaging and Ultrasound Suite"
                onerror="this.src='https://placehold.co/600x400/EAF5FF/253347?text=Imaging+Suite'"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 text-brand-teal flex items-center justify-center shadow-sm">
                <i data-lucide="activity" class="w-5 h-5"></i>
              </div>
            </div>
            <div class="p-5">
              <h3 class="font-heading font-bold text-lg text-brand-slate mb-1.5">Modern Imaging &amp; Ultrasound</h3>
              <p class="text-xs sm:text-sm text-brand-slateLight leading-relaxed">
                High-definition Doppler ultrasound, low-dose digital X-ray, and cardiac echo suites with immediate specialist review.
              </p>
            </div>
          </div>

          <!-- Facility 3 -->
          <div class="group rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-soft hover:shadow-card transition-all">
            <div class="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=700&q=80"
                alt="Outpatient Procedure Suites"
                onerror="this.src='https://placehold.co/600x400/EAF5FF/253347?text=Procedure+Suites'"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 text-brand-blue flex items-center justify-center shadow-sm">
                <i data-lucide="shield-plus" class="w-5 h-5"></i>
              </div>
            </div>
            <div class="p-5">
              <h3 class="font-heading font-bold text-lg text-brand-slate mb-1.5">Outpatient Procedure Suites</h3>
              <p class="text-xs sm:text-sm text-brand-slateLight leading-relaxed">
                Hospital-grade sterile minor procedure and dental operatories engineered for comfort, safety, and rapid recovery.
              </p>
            </div>
          </div>

          <!-- Facility 4 -->
          <div class="group rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-soft hover:shadow-card transition-all">
            <div class="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=700&q=80"
                alt="Comfortable Family Lounge and Pharmacy"
                onerror="this.src='https://placehold.co/600x400/EAF5FF/253347?text=Family+Lounge'"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 text-brand-teal flex items-center justify-center shadow-sm">
                <i data-lucide="coffee" class="w-5 h-5"></i>
              </div>
            </div>
            <div class="p-5">
              <h3 class="font-heading font-bold text-lg text-brand-slate mb-1.5">Family Lounge &amp; Pharmacy</h3>
              <p class="text-xs sm:text-sm text-brand-slateLight leading-relaxed">
                Sunlit acoustic waiting lounge with pediatric play corner, complimentary herbal tea, and an on-site dispensary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         SECTION 10: WHY CHOOSE US (4 Pillars with Teal/Blue Accents)
    ====================================================================== -->
    <section class="py-20 bg-brand-slate text-white relative overflow-hidden">
      <div class="absolute right-0 top-0 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute left-0 bottom-0 w-80 h-80 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span class="inline-flex items-center gap-2 text-brand-teal font-bold text-xs uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full">
            <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
            <span>The CarePlus Difference</span>
          </span>
          <h2 class="font-heading font-extrabold text-3xl sm:text-4xl">
            Why Families Trust CAREPLUS CLINIC
          </h2>
          <p class="text-slate-300 text-base">
            We reimagined every step of the clinic visit so you feel heard, respected, and cared for.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Pillar 1 -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors">
            <div class="w-12 h-12 rounded-2xl bg-brand-blue/20 text-brand-blue flex items-center justify-center mb-5">
              <i data-lucide="graduation-cap" class="w-6 h-6"></i>
            </div>
            <h3 class="font-heading font-bold text-lg text-white mb-2">Board-Aligned Specialists</h3>
            <p class="text-sm text-slate-300 leading-relaxed">
              Experienced clinicians who stay current with evidence-based outpatient protocols and take time to listen.
            </p>
          </div>

          <!-- Pillar 2 -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors">
            <div class="w-12 h-12 rounded-2xl bg-brand-teal/20 text-brand-teal flex items-center justify-center mb-5">
              <i data-lucide="calendar-clock" class="w-6 h-6"></i>
            </div>
            <h3 class="font-heading font-bold text-lg text-white mb-2">Same-Day &amp; Weekend Care</h3>
            <p class="text-sm text-slate-300 leading-relaxed">
              Extended weekday hours until 8:00 PM plus Saturday and Sunday urgent outpatient availability.
            </p>
          </div>

          <!-- Pillar 3 -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors">
            <div class="w-12 h-12 rounded-2xl bg-brand-blue/20 text-brand-blue flex items-center justify-center mb-5">
              <i data-lucide="receipt" class="w-6 h-6"></i>
            </div>
            <h3 class="font-heading font-bold text-lg text-white mb-2">Transparent Pricing &amp; Insurance</h3>
            <p class="text-sm text-slate-300 leading-relaxed">
              Upfront cost estimates before any test or procedure, with dedicated insurance verification support.
            </p>
          </div>

          <!-- Pillar 4 -->
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors">
            <div class="w-12 h-12 rounded-2xl bg-brand-teal/20 text-brand-teal flex items-center justify-center mb-5">
              <i data-lucide="smartphone" class="w-6 h-6"></i>
            </div>
            <h3 class="font-heading font-bold text-lg text-white mb-2">Patient-Centered Digital Care</h3>
            <p class="text-sm text-slate-300 leading-relaxed">
              Instant WhatsApp care coordination, paperless prescriptions, and digital lab results at your fingertips.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         SECTION 11: PATIENT TESTIMONIALS (3 Fictional Verified Reviews)
    ====================================================================== -->
    <section class="py-20 lg:py-24 bg-brand-sky/40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span class="inline-flex items-center gap-2 text-brand-teal font-bold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full shadow-soft">
            <i data-lucide="quote" class="w-3.5 h-3.5"></i>
            <span>Patient Stories (Fictional Examples)</span>
          </span>
          <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-brand-slate">
            Words From Our Patients &amp; Families
          </h2>
          <p class="text-brand-slateLight text-base">
            Illustrative patient stories showcasing the warmth, clarity, and comfort we strive to deliver every day.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
          <!-- Review 1 -->
          <article class="bg-white rounded-3xl p-7 shadow-soft border border-slate-100 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-1 text-amber-400">
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                </div>
                <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-teal bg-teal-50 px-2.5 py-1 rounded-full">
                  <i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified Visit
                </span>
              </div>
              <p class="text-sm text-brand-slate leading-relaxed italic mb-6">
                “From the moment I walked in, the atmosphere felt calm and welcoming—nothing like a stressful hospital. Dr. Elena Vance explained my ECG and preventive heart plan in plain language without rushing.”
              </p>
            </div>
            <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div class="w-10 h-10 rounded-full bg-brand-blue text-white font-heading font-bold text-sm flex items-center justify-center">
                MR
              </div>
              <div>
                <p class="font-heading font-bold text-sm text-brand-slate">Marcus Reynolds <span class="text-xs font-normal text-slate-400">(Fictional)</span></p>
                <p class="text-xs text-brand-blue font-medium">Cardiology Department</p>
              </div>
            </div>
          </article>

          <!-- Review 2 -->
          <article class="bg-white rounded-3xl p-7 shadow-soft border border-slate-100 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-1 text-amber-400">
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                </div>
                <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-teal bg-teal-50 px-2.5 py-1 rounded-full">
                  <i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified Visit
                </span>
              </div>
              <p class="text-sm text-brand-slate leading-relaxed italic mb-6">
                “My five-year-old used to dread doctor visits, but Dr. Priya Nair and the pediatric nursing team made him laugh the entire time. Booking online took thirty seconds and we were seen right on schedule.”
              </p>
            </div>
            <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div class="w-10 h-10 rounded-full bg-brand-teal text-white font-heading font-bold text-sm flex items-center justify-center">
                SL
              </div>
              <div>
                <p class="font-heading font-bold text-sm text-brand-slate">Sophia Lin-Patel <span class="text-xs font-normal text-slate-400">(Fictional)</span></p>
                <p class="text-xs text-brand-teal font-medium">Pediatrics Department</p>
              </div>
            </div>
          </article>

          <!-- Review 3 -->
          <article class="bg-white rounded-3xl p-7 shadow-soft border border-slate-100 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-1 text-amber-400">
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                </div>
                <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-teal bg-teal-50 px-2.5 py-1 rounded-full">
                  <i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified Visit
                </span>
              </div>
              <p class="text-sm text-brand-slate leading-relaxed italic mb-6">
                “I came in with sudden tooth pain on a Saturday morning and Dr. Hannah Brooks fitted me in within two hours. Gentle, modern equipment, and crystal-clear pricing before treatment started.”
              </p>
            </div>
            <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div class="w-10 h-10 rounded-full bg-brand-blue text-white font-heading font-bold text-sm flex items-center justify-center">
                DK
              </div>
              <div>
                <p class="font-heading font-bold text-sm text-brand-slate">Daniel Kowalski <span class="text-xs font-normal text-slate-400">(Fictional)</span></p>
                <p class="text-xs text-brand-blue font-medium">Dental Care Department</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         SECTION 12: FAQ ACCORDION & SECTION 13: CLINIC TIMINGS (Side-by-Side)
    ====================================================================== -->
    <section id="faq" class="py-20 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <!-- Left: FAQ Accordion (7 cols) -->
          <div class="lg:col-span-7 space-y-6">
            <div class="space-y-2.5">
              <span class="inline-flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-widest bg-brand-sky px-3.5 py-1.5 rounded-full">
                <i data-lucide="help-circle" class="w-3.5 h-3.5"></i>
                <span>Patient Questions</span>
              </span>
              <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-brand-slate">
                Frequently Asked Questions
              </h2>
              <p class="text-brand-slateLight text-base">
                Everything you need to know before visiting CAREPLUS CLINIC.
              </p>
            </div>

            <div id="faq-accordion" class="space-y-3.5">
              <!-- FAQ 1 -->
              <div class="faq-item active bg-brand-sky/35 border border-brand-blue/15 rounded-2xl overflow-hidden">
                <button type="button" aria-expanded="true" class="faq-trigger w-full flex items-center justify-between gap-4 p-5 text-left font-heading font-bold text-base text-brand-slate hover:text-brand-blue transition-colors">
                  <span>1. Which health insurance plans does CAREPLUS CLINIC accept?</span>
                  <i data-lucide="chevron-down" class="faq-chevron w-5 h-5 text-brand-blue shrink-0"></i>
                </button>
                <div class="faq-answer">
                  <div class="faq-answer-inner">
                    <p class="px-5 pb-5 text-sm text-brand-slateLight leading-relaxed">
                      We partner with most major PPO and HMO insurance networks—including BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, Humana, and Medicare. For uninsured patients, we offer clear, upfront self-pay consultation packages with zero surprise billing.
                    </p>
                  </div>
                </div>
              </div>

              <!-- FAQ 2 -->
              <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <button type="button" aria-expanded="false" class="faq-trigger w-full flex items-center justify-between gap-4 p-5 text-left font-heading font-bold text-base text-brand-slate hover:text-brand-blue transition-colors">
                  <span>2. Do you accept walk-in patients without a prior appointment?</span>
                  <i data-lucide="chevron-down" class="faq-chevron w-5 h-5 text-brand-blue shrink-0"></i>
                </button>
                <div class="faq-answer">
                  <div class="faq-answer-inner">
                    <p class="px-5 pb-5 text-sm text-brand-slateLight leading-relaxed">
                      Yes! We reserve dedicated same-day walk-in slots every day across General Medicine, Pediatrics, and Dental Care. However, booking a slot online or via WhatsApp guarantees priority check-in with minimal waiting.
                    </p>
                  </div>
                </div>
              </div>

              <!-- FAQ 3 -->
              <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <button type="button" aria-expanded="false" class="faq-trigger w-full flex items-center justify-between gap-4 p-5 text-left font-heading font-bold text-base text-brand-slate hover:text-brand-blue transition-colors">
                  <span>3. What should I bring to my first appointment?</span>
                  <i data-lucide="chevron-down" class="faq-chevron w-5 h-5 text-brand-blue shrink-0"></i>
                </button>
                <div class="faq-answer">
                  <div class="faq-answer-inner">
                    <p class="px-5 pb-5 text-sm text-brand-slateLight leading-relaxed">
                      Please bring a valid government photo ID, your insurance card (if applicable), a list of current medications or supplements, and any recent lab reports or imaging scans from the past 12 months.
                    </p>
                  </div>
                </div>
              </div>

              <!-- FAQ 4 -->
              <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <button type="button" aria-expanded="false" class="faq-trigger w-full flex items-center justify-between gap-4 p-5 text-left font-heading font-bold text-base text-brand-slate hover:text-brand-blue transition-colors">
                  <span>4. How are pediatric visits structured for infants and young children?</span>
                  <i data-lucide="chevron-down" class="faq-chevron w-5 h-5 text-brand-blue shrink-0"></i>
                </button>
                <div class="faq-answer">
                  <div class="faq-answer-inner">
                    <p class="px-5 pb-5 text-sm text-brand-slateLight leading-relaxed">
                      Our Pediatrics suite features separate well-child and sick-visit waiting zones, gentle distraction tools, and unhurried 25-minute appointments so parents have ample time to discuss nutrition, sleep, development, and vaccines.
                    </p>
                  </div>
                </div>
              </div>

              <!-- FAQ 5 -->
              <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <button type="button" aria-expanded="false" class="faq-trigger w-full flex items-center justify-between gap-4 p-5 text-left font-heading font-bold text-base text-brand-slate hover:text-brand-blue transition-colors">
                  <span>5. Can I get same-day treatment for dental emergencies?</span>
                  <i data-lucide="chevron-down" class="faq-chevron w-5 h-5 text-brand-blue shrink-0"></i>
                </button>
                <div class="faq-answer">
                  <div class="faq-answer-inner">
                    <p class="px-5 pb-5 text-sm text-brand-slateLight leading-relaxed">
                      Absolutely. If you are experiencing severe toothache, a chipped tooth, or swelling, call or message us on WhatsApp right away. Our Dental Care team keeps daily emergency relief slots open Monday through Saturday.
                    </p>
                  </div>
                </div>
              </div>

              <!-- FAQ 6 -->
              <div class="faq-item bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <button type="button" aria-expanded="false" class="faq-trigger w-full flex items-center justify-between gap-4 p-5 text-left font-heading font-bold text-base text-brand-slate hover:text-brand-blue transition-colors">
                  <span>6. How quickly will I receive my diagnostic lab and imaging results?</span>
                  <i data-lucide="chevron-down" class="faq-chevron w-5 h-5 text-brand-blue shrink-0"></i>
                </button>
                <div class="faq-answer">
                  <div class="faq-answer-inner">
                    <p class="px-5 pb-5 text-sm text-brand-slateLight leading-relaxed">
                      Routine blood panels, ECGs, digital X-rays, and ultrasounds performed at our on-site lab are typically ready within 2 to 6 hours and shared securely via email along with your doctor’s summary notes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: SECTION 13 - CLINIC TIMINGS CARD (5 cols) -->
          <div id="timings" class="lg:col-span-5">
            <div class="bg-brand-sky/65 border border-brand-blue/20 rounded-3xl p-7 sm:p-8 shadow-card sticky top-28 space-y-6">
              <div class="flex items-start justify-between gap-3">
                <div>
                  <span class="text-xs font-bold uppercase tracking-wider text-brand-blue">Operating Schedule</span>
                  <h3 class="font-heading font-extrabold text-2xl text-brand-slate mt-1">Clinic Timings</h3>
                </div>
                <!-- Live Open/Closed Status Pill calculated via JS -->
                <div id="live-status-badge" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white shadow-sm border border-slate-100">
                  <span id="live-status-dot" class="w-2.5 h-2.5 rounded-full bg-brand-teal"></span>
                  <span id="live-status-text" class="text-brand-slate">Checking hours...</span>
                </div>
              </div>

              <p class="text-sm text-brand-slateLight">
                Extended evening and weekend outpatient hours designed around busy work and school schedules.
              </p>

              <!-- Schedule Table -->
              <div class="bg-white rounded-2xl p-5 border border-slate-100 divide-y divide-slate-100 text-sm">
                <div class="py-3.5 flex items-center justify-between">
                  <div class="flex items-center gap-2.5 font-semibold text-brand-slate">
                    <i data-lucide="calendar" class="w-4 h-4 text-brand-blue"></i>
                    <span>Monday – Friday</span>
                  </div>
                  <span class="font-bold text-brand-slate">8:00 AM – 8:00 PM</span>
                </div>

                <div class="py-3.5 flex items-center justify-between">
                  <div class="flex items-center gap-2.5 font-semibold text-brand-slate">
                    <i data-lucide="calendar" class="w-4 h-4 text-brand-teal"></i>
                    <span>Saturday</span>
                  </div>
                  <span class="font-bold text-brand-slate">9:00 AM – 5:00 PM</span>
                </div>

                <div class="py-3.5 flex items-center justify-between">
                  <div>
                    <div class="flex items-center gap-2.5 font-semibold text-brand-slate">
                      <i data-lucide="clock" class="w-4 h-4 text-brand-blue"></i>
                      <span>Sunday</span>
                    </div>
                    <span class="text-xs text-brand-teal font-medium pl-6 block">Urgent Outpatient Care</span>
                  </div>
                  <span class="font-bold text-brand-slate">10:00 AM – 2:00 PM</span>
                </div>

                <div class="pt-3.5 flex items-center justify-between text-xs text-brand-slateLight">
                  <span>Diagnostic Lab Sample Collection</span>
                  <span class="font-semibold text-brand-slate">Opens 7:30 AM Mon–Sat</span>
                </div>
              </div>

              <!-- Local Time Display -->
              <div class="flex items-center justify-between text-xs text-brand-slateLight bg-white/75 px-4 py-3 rounded-xl">
                <span>Current Local Time:</span>
                <span id="clinic-local-clock" class="font-mono font-bold text-brand-slate">--:--</span>
              </div>

              <a href="#booking" class="w-full inline-flex items-center justify-center gap-2 bg-brand-teal hover:bg-brand-tealDark text-white font-bold py-3.5 px-5 rounded-xl shadow-sm transition-all text-sm">
                <i data-lucide="calendar-check" class="w-4 h-4"></i>
                <span>Reserve Your Preferred Slot</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         SECTION 14: LOCATION & INTERACTIVE MAP + SECTION 15: CONTACT
    ====================================================================== -->
    <section id="contact" class="py-20 lg:py-24 bg-brand-sky/45 border-t border-brand-blue/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <!-- Section 14: Location & Custom Interactive Vector Map -->
        <div>
          <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span class="inline-flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full shadow-soft">
              <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
              <span>Visit Our Campus</span>
            </span>
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-brand-slate">
              Location, Parking &amp; Directions
            </h2>
            <p class="text-brand-slateLight text-base">
              450 Wellness Boulevard, Suite 200, Brookside Medical District (Fictional Address)
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <!-- Interactive Styled Vector Map (7 cols) -->
            <div class="lg:col-span-7 bg-white rounded-3xl p-3 shadow-card border border-slate-100 relative overflow-hidden min-h-[380px] flex flex-col">
              <!-- Map Controls Overlay -->
              <div class="absolute top-6 left-6 z-20 glass-card rounded-2xl p-3.5 shadow-md max-w-[250px]">
                <div class="flex items-center gap-2.5">
                  <div class="w-9 h-9 rounded-xl bg-brand-blue text-white flex items-center justify-center shrink-0">
                    <i data-lucide="navigation" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <p class="font-heading font-bold text-xs text-brand-slate">CAREPLUS CLINIC</p>
                    <p class="text-[11px] text-brand-slateLight">450 Wellness Blvd, Suite 200</p>
                  </div>
                </div>
              </div>

              <!-- Zoom Controls -->
              <div class="absolute top-6 right-6 z-20 flex flex-col gap-1.5">
                <button type="button" id="map-zoom-in" aria-label="Zoom In Map" class="w-9 h-9 rounded-xl bg-white hover:bg-brand-sky text-brand-slate shadow-md border border-slate-200 flex items-center justify-center font-bold transition-colors">
                  <i data-lucide="plus" class="w-4 h-4"></i>
                </button>
                <button type="button" id="map-zoom-out" aria-label="Zoom Out Map" class="w-9 h-9 rounded-xl bg-white hover:bg-brand-sky text-brand-slate shadow-md border border-slate-200 flex items-center justify-center font-bold transition-colors">
                  <i data-lucide="minus" class="w-4 h-4"></i>
                </button>
                <button type="button" id="map-reset" aria-label="Center Clinic Pin" class="w-9 h-9 rounded-xl bg-white hover:bg-brand-sky text-brand-blue shadow-md border border-slate-200 flex items-center justify-center transition-colors">
                  <i data-lucide="crosshair" class="w-4 h-4"></i>
                </button>
              </div>

              <!-- Interactive SVG Neighborhood Map Canvas -->
              <div class="relative w-full h-full min-h-[360px] rounded-2xl overflow-hidden bg-[#E6F2FC] select-none">
                <svg id="clinic-vector-map" viewBox="0 0 800 460" class="w-full h-full object-cover transition-transform duration-300 origin-center" xmlns="http://www.w3.org/2000/svg">
                  <!-- Soft Parks & Green Zones -->
                  <rect width="800" height="460" fill="#EBF5FD"/>
                  <path d="M40 40 H260 V180 H40 Z" rx="24" fill="#DCF4EE"/>
                  <path d="M540 270 H760 V420 H540 Z" rx="24" fill="#DCF4EE"/>
                  <text x="150" y="115" text-anchor="middle" fill="#18A999" font-size="12" font-weight="700" font-family="Inter, sans-serif">BROOKSIDE BOTANICAL PARK</text>
                  <text x="650" y="350" text-anchor="middle" fill="#18A999" font-size="11" font-weight="700" font-family="Inter, sans-serif">RIVERSIDE GREENWAY</text>

                  <!-- River Waterway -->
                  <path d="M0 390 Q240 350 420 410 T800 380 L800 460 L0 460 Z" fill="#CBE6FA"/>

                  <!-- Road Grid -->
                  <g stroke="#FFFFFF" stroke-width="18" stroke-linecap="round">
                    <line x1="0" y1="225" x2="800" y2="225"/>
                    <line x1="395" y1="0" x2="395" y2="460"/>
                    <line x1="160" y1="0" x2="160" y2="460"/>
                    <line x1="630" y1="0" x2="630" y2="460"/>
                    <line x1="0" y1="95" x2="800" y2="95"/>
                  </g>
                  <!-- Center Highway Accent -->
                  <line x1="0" y1="225" x2="800" y2="225" stroke="#B7DCF7" stroke-width="2" stroke-dasharray="8 8"/>
                  <line x1="395" y1="0" x2="395" y2="460" stroke="#B7DCF7" stroke-width="2" stroke-dasharray="8 8"/>

                  <!-- Street Labels -->
                  <text x="275" y="229" fill="#52637A" font-size="11" font-weight="700" font-family="Inter, sans-serif">WELLNESS BOULEVARD</text>
                  <text x="408" y="155" fill="#52637A" font-size="11" font-weight="700" font-family="Inter, sans-serif" transform="rotate(90 408 155)">BROOKSIDE AVE</text>

                  <!-- Nearby Landmarks -->
                  <g class="cursor-pointer map-landmark" data-info="Brookside Metro Station • 3-min covered walk (Exit B)">
                    <rect x="445" y="135" width="125" height="44" rx="10" fill="#FFFFFF" stroke="#2996D6" stroke-width="1.5"/>
                    <text x="507" y="155" text-anchor="middle" fill="#253347" font-size="11" font-weight="700" font-family="Inter, sans-serif">🚇 Brookside Metro</text>
                    <text x="507" y="170" text-anchor="middle" fill="#52637A" font-size="9.5" font-family="Inter, sans-serif">3 min walk</text>
                  </g>

                  <g class="cursor-pointer map-landmark" data-info="Patient Garage P1 • Free 2-Hour Validated Parking & EV Chargers">
                    <rect x="220" y="260" width="130" height="44" rx="10" fill="#FFFFFF" stroke="#18A999" stroke-width="1.5"/>
                    <text x="285" y="280" text-anchor="middle" fill="#253347" font-size="11" font-weight="700" font-family="Inter, sans-serif">🅿️ Patient Garage P1</text>
                    <text x="285" y="295" text-anchor="middle" fill="#18A999" font-size="9.5" font-weight="600" font-family="Inter, sans-serif">Free 2-Hr Parking</text>
                  </g>

                  <!-- Main CAREPLUS CLINIC Pin at Center (395, 225) -->
                  <g id="clinic-map-pin" class="cursor-pointer" data-info="CAREPLUS CLINIC • 450 Wellness Blvd, Suite 200 • Ground-Floor Wheelchair Access">
                    <circle cx="395" cy="225" r="24" fill="#2996D6" opacity="0.25" class="map-pin-ripple"/>
                    <circle cx="395" cy="225" r="18" fill="#2996D6" stroke="#FFFFFF" stroke-width="3.5"/>
                    <rect x="392.5" y="216" width="5" height="18" rx="2" fill="#FFFFFF"/>
                    <rect x="386" y="222.5" width="18" height="5" rx="2" fill="#FFFFFF"/>

                    <!-- Pin Label Callout -->
                    <rect x="325" y="172" width="140" height="30" rx="15" fill="#253347"/>
                    <text x="395" y="191" text-anchor="middle" fill="#FFFFFF" font-size="11" font-weight="800" font-family="Plus Jakarta Sans, sans-serif">CAREPLUS CLINIC</text>
                  </g>
                </svg>

                <!-- Interactive Map Pin Info Bar -->
                <div id="map-info-toast" class="absolute bottom-3 left-3 right-3 bg-brand-slate/95 text-white text-xs px-4 py-2.5 rounded-xl flex items-center justify-between gap-2 shadow-lg">
                  <span id="map-info-text" class="font-medium">Click any landmark on the map for transit &amp; parking details.</span>
                  <span class="text-brand-teal font-bold shrink-0">Suite 200 • 2nd Floor</span>
                </div>
              </div>
            </div>

            <!-- Access, Parking & Transit Details (5 cols) -->
            <div class="lg:col-span-5 bg-white rounded-3xl p-7 shadow-soft border border-slate-100 flex flex-col justify-between space-y-6">
              <div class="space-y-5">
                <h3 class="font-heading font-bold text-2xl text-brand-slate">Getting Here Easily</h3>

                <div class="flex items-start gap-4">
                  <div class="w-11 h-11 rounded-2xl bg-brand-sky text-brand-blue flex items-center justify-center shrink-0">
                    <i data-lucide="map-pin" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <p class="font-bold text-sm text-brand-slate">Clinic Address</p>
                    <p class="text-sm text-brand-slateLight mt-0.5">450 Wellness Boulevard, Suite 200<br/>Brookside Medical District, NY 10024</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-11 h-11 rounded-2xl bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
                    <i data-lucide="car" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <p class="font-bold text-sm text-brand-slate">Patient Parking &amp; Drop-Off</p>
                    <p class="text-sm text-brand-slateLight mt-0.5">2 hours complimentary parking in Garage P1 (entrance on Brookside Ave) plus covered curbside patient drop-off.</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-11 h-11 rounded-2xl bg-brand-sky text-brand-blue flex items-center justify-center shrink-0">
                    <i data-lucide="train" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <p class="font-bold text-sm text-brand-slate">Public Transit &amp; Accessibility</p>
                    <p class="text-sm text-brand-slateLight mt-0.5">3-minute walk from Brookside Metro Station (Blue &amp; Green Lines) and Bus Routes 14 &amp; 42. Full elevator &amp; wheelchair accessibility.</p>
                  </div>
                </div>
              </div>

              <a href="https://maps.google.com/?q=450+Wellness+Boulevard" target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-2 bg-brand-sky hover:bg-brand-blue text-brand-blue hover:text-white font-bold py-3.5 px-5 rounded-xl transition-colors text-sm">
                <i data-lucide="external-link" class="w-4 h-4"></i>
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Section 15: Direct Contact Cards + Quick Inquiry Mini-Form -->
        <div class="pt-6 border-t border-brand-blue/15">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <!-- 3 Direct Contact Cards (5 cols) -->
            <div class="lg:col-span-5 space-y-4">
              <h3 class="font-heading font-extrabold text-2xl text-brand-slate">Get in Touch Directly</h3>
              <p class="text-sm text-brand-slateLight">
                Have a question about lab preparation, insurance coverage, or medical records? Reach our patient care desk anytime.
              </p>

              <!-- Call Us Card -->
              <a href="tel:+15552348910" class="block bg-white hover:border-brand-blue border border-slate-100 rounded-2xl p-5 shadow-soft transition-all group">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-2xl bg-brand-sky text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                    <i data-lucide="phone-call" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <p class="text-xs font-bold uppercase tracking-wider text-brand-slateLight">Call Care Desk</p>
                    <p class="font-heading font-bold text-lg text-brand-slate">+1 (555) 234-8910</p>
                    <p class="text-xs text-brand-teal font-medium">Mon–Sun during clinic hours</p>
                  </div>
                </div>
              </a>

              <!-- Email Us Card -->
              <a href="mailto:care@careplusclinic.example" class="block bg-white hover:border-brand-blue border border-slate-100 rounded-2xl p-5 shadow-soft transition-all group">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-2xl bg-brand-sky text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                    <i data-lucide="mail" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <p class="text-xs font-bold uppercase tracking-wider text-brand-slateLight">Email Patient Support</p>
                    <p class="font-heading font-bold text-base sm:text-lg text-brand-slate break-all">care@careplusclinic.example</p>
                    <p class="text-xs text-brand-slateLight">Replies within 2 business hours</p>
                  </div>
                </div>
              </a>

              <!-- WhatsApp Instant Chat Card -->
              <a href="https://wa.me/15552348910?text=Hello%20CAREPLUS%20CLINIC%2C%20I%20have%20a%20question%20for%20the%20patient%20care%20team." target="_blank" rel="noopener noreferrer" class="block bg-brand-teal hover:bg-brand-tealDark text-white rounded-2xl p-5 shadow-glow transition-all">
                <div class="flex items-center justify-between gap-4">
                  <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                      <i data-lucide="message-circle" class="w-6 h-6"></i>
                    </div>
                    <div>
                      <p class="text-xs font-bold uppercase tracking-wider text-teal-100">Instant Messaging</p>
                      <p class="font-heading font-bold text-lg">WhatsApp Instant Chat</p>
                      <p class="text-xs text-teal-50">Tap to start a direct chat</p>
                    </div>
                  </div>
                  <i data-lucide="arrow-up-right" class="w-5 h-5 shrink-0"></i>
                </div>
              </a>
            </div>

            <!-- Quick Inquiry Mini-Form (7 cols) -->
            <div class="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-8 shadow-soft border border-slate-100">
              <h3 class="font-heading font-bold text-xl text-brand-slate mb-1">Send a Quick Message</h3>
              <p class="text-xs sm:text-sm text-brand-slateLight mb-6">
                Not ready to pick an appointment slot yet? Send us a general inquiry and our coordinator will follow up.
              </p>

              <form id="quick-contact-form" novalidate class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="contact-name" class="block text-xs font-semibold text-brand-slate mb-1.5">Your Name <span class="text-rose-500">*</span></label>
                    <input type="text" id="contact-name" required placeholder="Alex Morgan" class="input-field w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                  </div>
                  <div>
                    <label for="contact-email" class="block text-xs font-semibold text-brand-slate mb-1.5">Email or Phone <span class="text-rose-500">*</span></label>
                    <input type="text" id="contact-email" required placeholder="alex@example.com" class="input-field w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" />
                  </div>
                </div>

                <div>
                  <label for="contact-subject" class="block text-xs font-semibold text-brand-slate mb-1.5">Topic</label>
                  <select id="contact-subject" class="input-field w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white">
                    <option value="Insurance & Billing Inquiry">Insurance &amp; Billing Inquiry</option>
                    <option value="Diagnostic Lab & Imaging Question">Diagnostic Lab &amp; Imaging Question</option>
                    <option value="Medical Records Request">Medical Records Request</option>
                    <option value="General Feedback">General Feedback</option>
                  </select>
                </div>

                <div>
                  <label for="contact-message" class="block text-xs font-semibold text-brand-slate mb-1.5">Message <span class="text-rose-500">*</span></label>
                  <textarea id="contact-message" rows="3" required placeholder="How can our care team assist you?" class="input-field w-full px-4 py-3 rounded-xl border border-slate-200 text-sm"></textarea>
                </div>

                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                  <button type="submit" class="inline-flex items-center justify-center gap-2 bg-brand-slate hover:bg-brand-blue text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm">
                    <i data-lucide="send" class="w-4 h-4"></i>
                    <span>Send Message</span>
                  </button>
                  <p id="contact-form-status" class="text-xs font-semibold hidden"></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- ======================================================================
       SECTION 16: MULTI-COLUMN FOOTER (#253347 Dark Slate)
  ====================================================================== -->
  <footer class="bg-brand-slate text-slate-300 pt-16 pb-10 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
        <!-- Brand Column (4 cols) -->
        <div class="lg:col-span-4 space-y-4">
          <a href="#" class="inline-flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="12.5" y="3" width="7" height="26" rx="3.5" fill="#2996D6"/>
                <rect x="3" y="12.5" width="26" height="7" rx="3.5" fill="#18A999"/>
                <circle cx="16" cy="16" r="3" fill="#FFFFFF"/>
              </svg>
            </div>
            <div>
              <span class="font-heading font-extrabold text-lg text-white block leading-none">
                CAREPLUS <span class="text-brand-blue">CLINIC</span>
              </span>
              <span class="text-[11px] text-brand-teal font-medium block mt-1">Care That Makes a Difference.</span>
            </div>
          </a>
          <p class="text-sm text-slate-400 leading-relaxed">
            A modern outpatient medical center dedicated to compassionate, evidence-based family and specialty healthcare in a calm, patient-first environment.
          </p>
          <div class="flex items-center gap-3 pt-1">
            <a href="https://wa.me/15552348910" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-teal text-white flex items-center justify-center transition-colors">
              <i data-lucide="message-circle" class="w-4 h-4"></i>
            </a>
            <a href="#contact" aria-label="Instagram" class="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-blue text-white flex items-center justify-center transition-colors">
              <i data-lucide="instagram" class="w-4 h-4"></i>
            </a>
            <a href="#contact" aria-label="LinkedIn" class="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-blue text-white flex items-center justify-center transition-colors">
              <i data-lucide="linkedin" class="w-4 h-4"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links (2 cols) -->
        <div class="lg:col-span-2 space-y-3">
          <h4 class="font-heading font-bold text-white text-sm uppercase tracking-wider">Quick Links</h4>
          <ul class="space-y-2.5 text-sm">
            <li><a href="#about" class="hover:text-brand-teal transition-colors">About Clinic</a></li>
            <li><a href="#doctors" class="hover:text-brand-teal transition-colors">Our Doctors</a></li>
            <li><a href="#facilities" class="hover:text-brand-teal transition-colors">Facilities</a></li>
            <li><a href="#timings" class="hover:text-brand-teal transition-colors">Clinic Timings</a></li>
            <li><a href="#faq" class="hover:text-brand-teal transition-colors">Patient FAQ</a></li>
            <li><a href="#booking" class="hover:text-brand-teal transition-colors">Book Visit</a></li>
          </ul>
        </div>

        <!-- Medical Departments (3 cols) -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="font-heading font-bold text-white text-sm uppercase tracking-wider">Departments</h4>
          <ul class="space-y-2.5 text-sm">
            <li><a href="#services" class="hover:text-brand-blue transition-colors">General Medicine</a></li>
            <li><a href="#services" class="hover:text-brand-blue transition-colors">Cardiology</a></li>
            <li><a href="#services" class="hover:text-brand-blue transition-colors">Dermatology</a></li>
            <li><a href="#services" class="hover:text-brand-blue transition-colors">Orthopedics</a></li>
            <li><a href="#services" class="hover:text-brand-blue transition-colors">Pediatrics</a></li>
            <li><a href="#services" class="hover:text-brand-blue transition-colors">Dental Care</a></li>
          </ul>
        </div>

        <!-- Wellness Newsletter (3 cols) -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="font-heading font-bold text-white text-sm uppercase tracking-wider">Health &amp; Wellness Notes</h4>
          <p class="text-xs text-slate-400 leading-relaxed">
            Subscribe for seasonal preventive health tips and clinic updates. No spam, ever.
          </p>
          <form id="newsletter-form" class="space-y-2.5">
            <input type="email" id="newsletter-email" required placeholder="Enter your email" class="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-teal" />
            <button type="submit" class="w-full bg-brand-blue hover:bg-brand-blueDark text-white font-semibold text-xs py-2.5 px-4 rounded-xl transition-colors">
              Subscribe to Updates
            </button>
            <p id="newsletter-msg" class="text-xs text-brand-teal hidden"></p>
          </form>
        </div>
      </div>

      <!-- Bottom Copyright & Fictional Disclaimer -->
      <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>© <span id="current-year">2026</span> CAREPLUS CLINIC. All rights reserved.</p>
        <p class="text-center md:text-right max-w-2xl text-slate-400">
          <strong class="text-slate-300">Disclaimer:</strong> CAREPLUS CLINIC, all physician names, clinical profiles, testimonials, and contact details presented on this website are entirely fictional and created for healthcare UI/UX demonstration purposes.
        </p>
      </div>
    </div>
  </footer>

  <!-- ======================================================================
       FLOATING WHATSAPP QUICK-CHAT BUTTON (Bottom-Right Corner)
  ====================================================================== -->
  <a
    href="https://wa.me/15552348910?text=Hello%20CAREPLUS%20CLINIC%2C%20I%20would%20like%20to%20book%20an%20appointment%20or%20ask%20a%20question."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with CAREPLUS CLINIC on WhatsApp"
    class="fixed bottom-5 right-5 z-50 group flex items-center gap-2.5 bg-[#18A999] hover:bg-[#128578] text-white font-semibold px-4 py-3.5 rounded-full shadow-2xl animate-soft-pulse transition-all"
  >
    <i data-lucide="message-circle" class="w-6 h-6"></i>
    <span class="hidden sm:inline text-sm pr-1">Chat on WhatsApp</span>
  </a>

  <!-- ======================================================================
       js/script.js - Modular Interactive Logic
  ====================================================================== -->
  <script>
    /**
     * CAREPLUS CLINIC - Frontend Application Controller
     * Handles:
     * 1. Lucide Icon Initialization
     * 2. Fictional Doctor Profiles & Specialty Sync
     * 3. Mobile Navigation Drawer & Sticky Navbar Shadow
     * 4. Appointment Booking Form Validation & Confirmation Card
     * 5. Accessible FAQ Accordion
     * 6. Live Clinic Open/Closed Status Calculator
     * 7. Interactive Vector Map Controls & Pin Tooltips
     * 8. Quick Contact & Newsletter Forms
     */
    document.addEventListener('DOMContentLoaded', () => {
      // 1. Initialize Lucide Icons
      if (window.lucide) {
        lucide.createIcons();
      }

      // Set current year in footer
      const yearEl = document.getElementById('current-year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();

      // ====================================================================
      // 2. FICTIONAL DOCTOR PROFILES DATA (6 Specialties)
      // ====================================================================
      const DOCTOR_DATA = [
        {
          id: 'dr-carter',
          name: 'Dr. Julian Carter',
          specialty: 'General Medicine',
          experience: '15 years of clinical focus in preventive primary care, metabolic wellness, and chronic condition management.',
          availability: ['Mon', 'Tue', 'Thu', 'Fri'],
          image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80',
          badgeColor: 'bg-brand-sky text-brand-blue'
        },
        {
          id: 'dr-vance',
          name: 'Dr. Elena Vance',
          specialty: 'Cardiology',
          experience: '14 years of clinical focus in preventive heart health, echocardiography, and non-invasive cardiac diagnostics.',
          availability: ['Mon', 'Wed', 'Fri', 'Sat'],
          image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=80',
          badgeColor: 'bg-teal-50 text-brand-teal'
        },
        {
          id: 'dr-chen',
          name: 'Dr. Maya Chen',
          specialty: 'Dermatology',
          experience: '11 years of clinical focus in medical dermatology, full-body skin screenings, and gentle barrier-repair protocols.',
          availability: ['Tue', 'Wed', 'Thu', 'Sat'],
          image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80',
          badgeColor: 'bg-brand-sky text-brand-blue'
        },
        {
          id: 'dr-bennett',
          name: 'Dr. Liam Bennett',
          specialty: 'Orthopedics',
          experience: '16 years of clinical focus in sports medicine, joint preservation, and non-surgical spine & mobility rehabilitation.',
          availability: ['Mon', 'Tue', 'Thu', 'Fri'],
          image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80',
          badgeColor: 'bg-teal-50 text-brand-teal'
        },
        {
          id: 'dr-nair',
          name: 'Dr. Priya Nair',
          specialty: 'Pediatrics',
          experience: '12 years of clinical focus in newborn wellness, childhood immunizations, and family-centered pediatric care.',
          availability: ['Mon', 'Wed', 'Thu', 'Sat'],
          image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=700&q=80',
          badgeColor: 'bg-brand-sky text-brand-blue'
        },
        {
          id: 'dr-brooks',
          name: 'Dr. Hannah Brooks',
          specialty: 'Dental Care',
          experience: '10 years of clinical focus in pain-minimized restorative dentistry, preventive hygiene, and urgent dental relief.',
          availability: ['Tue', 'Wed', 'Fri', 'Sat'],
          image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=700&q=80',
          badgeColor: 'bg-teal-50 text-brand-teal'
        }
      ];

      // Render Doctor Profile Cards
      const doctorsGrid = document.getElementById('doctors-grid');
      if (doctorsGrid) {
        doctorsGrid.innerHTML = DOCTOR_DATA.map((doc) => {
          const daysPills = doc.availability
            .map(
              (day) =>
                `<span class="px-2.5 py-1 rounded-lg bg-slate-100 text-brand-slate text-[11px] font-semibold">${day}</span>`
            )
            .join('');

          return `
            <article class="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-card transition-all flex flex-col justify-between group">
              <div>
                <div class="relative h-64 overflow-hidden bg-brand-sky">
                  <img
                    src="${doc.image}"
                    alt="${doc.name} - ${doc.specialty} Specialist (Fictional)"
                    onerror="this.src='https://placehold.co/600x500/EAF5FF/253347?text=${encodeURIComponent(doc.name)}'"
                    class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <span class="absolute top-4 left-4 ${doc.badgeColor} text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm">
                    ${doc.specialty}
                  </span>
                </div>
                <div class="p-6">
                  <div class="flex items-center justify-between gap-2 mb-2">
                    <h3 class="font-heading font-bold text-xl text-brand-slate">${doc.name}</h3>
                    <span class="text-[11px] text-slate-400 font-medium">Fictional Profile</span>
                  </div>
                  <p class="text-sm text-brand-slateLight leading-relaxed mb-4">
                    ${doc.experience}
                  </p>
                  <div class="pt-3 border-t border-slate-100">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">Weekly Availability</span>
                    <div class="flex flex-wrap gap-1.5">
                      ${daysPills}
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-6 pb-6">
                <button
                  type="button"
                  data-doctor-name="${doc.name}"
                  data-doctor-specialty="${doc.specialty}"
                  class="book-doctor-btn w-full inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blueDark text-white font-semibold text-sm py-3 px-4 rounded-xl shadow-sm transition-colors"
                >
                  <i data-lucide="calendar-plus" class="w-4 h-4"></i>
                  <span>Book with ${doc.name}</span>
                </button>
              </div>
            </article>
          `;
        }).join('');

        // Re-initialize Lucide icons inside dynamically injected doctor cards
        if (window.lucide) lucide.createIcons();
      }

      // ====================================================================
      // 3. MOBILE MENU & STICKY HEADER SCROLL SHADOW
      // ====================================================================
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const iconOpen = document.getElementById('menu-icon-open');
      const iconClose = document.getElementById('menu-icon-close');
      const navbar = document.getElementById('navbar');

      function toggleMobileMenu(forceClose = false) {
        if (!mobileMenu || !mobileMenuBtn) return;
        const isCurrentlyOpen = !mobileMenu.classList.contains('hidden');
        const shouldOpen = forceClose ? false : !isCurrentlyOpen;

        mobileMenu.classList.toggle('hidden', !shouldOpen);
        mobileMenuBtn.setAttribute('aria-expanded', String(shouldOpen));
        if (iconOpen && iconClose) {
          iconOpen.classList.toggle('hidden', shouldOpen);
          iconClose.classList.toggle('hidden', !shouldOpen);
        }
      }

      if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => toggleMobileMenu());
      }

      document.querySelectorAll('.mobile-nav-link').forEach((link) => {
        link.addEventListener('click', () => toggleMobileMenu(true));
      });

      window.addEventListener('scroll', () => {
        if (!navbar) return;
        if (window.scrollY > 12) {
          navbar.classList.add('shadow-md');
        } else {
          navbar.classList.remove('shadow-md');
        }
      });

      // ====================================================================
      // 4. APPOINTMENT FORM: DOCTOR/SPECIALTY SYNC, DATE & TIME SLOTS
      // ====================================================================
      const specialtySelect = document.getElementById('specialty-select');
      const doctorSelect = document.getElementById('doctor-select');
      const dateInput = document.getElementById('appointment-date');
      const timeSlotInput = document.getElementById('selected-time-slot');
      const timeSlotBtns = document.querySelectorAll('.time-slot-btn');

      // Set min date to today in YYYY-MM-DD local format
      if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        dateInput.min = `${yyyy}-${mm}-${dd}`;
      }

      // Populate Doctor Dropdown (optionally filtered by specialty)
      function populateDoctorDropdown(filterSpecialty = '', preselectDoctor = '') {
        if (!doctorSelect) return;
        const filtered = filterSpecialty
          ? DOCTOR_DATA.filter((d) => d.specialty === filterSpecialty)
          : DOCTOR_DATA;

        doctorSelect.innerHTML = '<option value="">Select a Doctor</option>';
        filtered.forEach((doc) => {
          const opt = document.createElement('option');
          opt.value = doc.name;
          opt.textContent = `${doc.name} (${doc.specialty})`;
          doctorSelect.appendChild(opt);
        });

        if (preselectDoctor) {
          doctorSelect.value = preselectDoctor;
        } else if (filtered.length === 1) {
          doctorSelect.value = filtered[0].name;
        }
      }

      populateDoctorDropdown();

      if (specialtySelect) {
        specialtySelect.addEventListener('change', (e) => {
          populateDoctorDropdown(e.target.value);
          clearFieldError('specialty-select', 'error-specialty');
          if (doctorSelect.value) {
            clearFieldError('doctor-select', 'error-doctor');
          }
        });
      }

      if (doctorSelect) {
        doctorSelect.addEventListener('change', (e) => {
          const chosen = DOCTOR_DATA.find((d) => d.name === e.target.value);
          if (chosen && specialtySelect && !specialtySelect.value) {
            specialtySelect.value = chosen.specialty;
            clearFieldError('specialty-select', 'error-specialty');
          }
          clearFieldError('doctor-select', 'error-doctor');
        });
      }

      // Helper: Scroll smoothly to booking form and preselect specialty/doctor
      function prefillAndScrollToBooking(specialty, doctorName = '') {
        if (specialtySelect) {
          specialtySelect.value = specialty;
          clearFieldError('specialty-select', 'error-specialty');
        }
        populateDoctorDropdown(specialty, doctorName);
        if (doctorSelect && doctorSelect.value) {
          clearFieldError('doctor-select', 'error-doctor');
        }

        // Ensure form is visible if confirmation card was open
        const formEl = document.getElementById('appointment-form');
        const confEl = document.getElementById('booking-confirmation');
        if (formEl && confEl) {
          confEl.classList.add('hidden');
          formEl.classList.remove('hidden');
        }

        const bookingSection = document.getElementById('booking');
        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }

      // Service cards "Book this Specialty" buttons
      document.querySelectorAll('.book-service-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const service = btn.getAttribute('data-select-service');
          prefillAndScrollToBooking(service);
        });
      });

      // Doctor cards "Book with Dr. [Name]" buttons (event delegation)
      if (doctorsGrid) {
        doctorsGrid.addEventListener('click', (e) => {
          const btn = e.target.closest('.book-doctor-btn');
          if (!btn) return;
          const docName = btn.getAttribute('data-doctor-name');
          const docSpec = btn.getAttribute('data-doctor-specialty');
          prefillAndScrollToBooking(docSpec, docName);
        });
      }

      // Time Slot Pill Selection
      timeSlotBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          timeSlotBtns.forEach((b) => b.classList.remove('selected'));
          btn.classList.add('selected');
          if (timeSlotInput) {
            timeSlotInput.value = btn.getAttribute('data-time') || '';
          }
          const errTime = document.getElementById('error-time');
          if (errTime) errTime.classList.add('hidden');
        });
      });

      // Validation Helpers
      function showFieldError(inputId, errorId, message) {
        const input = document.getElementById(inputId);
        const error = document.getElementById(errorId);
        if (input) input.classList.add('input-error');
        if (error) {
          error.textContent = message;
          error.classList.remove('hidden');
        }
      }

      function clearFieldError(inputId, errorId) {
        const input = document.getElementById(inputId);
        const error = document.getElementById(errorId);
        if (input) input.classList.remove('input-error');
        if (error) error.classList.add('hidden');
      }

      // Attach live clear listeners
      [
        ['patient-name', 'error-patient-name'],
        ['patient-phone', 'error-patient-phone'],
        ['patient-email', 'error-patient-email'],
        ['appointment-date', 'error-date']
      ].forEach(([inId, errId]) => {
        const el = document.getElementById(inId);
        if (el) {
          el.addEventListener('input', () => clearFieldError(inId, errId));
        }
      });

      // Form Submission & Confirmation Display
      const appointmentForm = document.getElementById('appointment-form');
      const bookingConfirmation = document.getElementById('booking-confirmation');
      const bookAnotherBtn = document.getElementById('book-another-btn');

      if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
          e.preventDefault();
          let isValid = true;

          const nameVal = document.getElementById('patient-name').value.trim();
          const phoneVal = document.getElementById('patient-phone').value.trim();
          const emailVal = document.getElementById('patient-email').value.trim();
          const specVal = specialtySelect.value;
          const docVal = doctorSelect.value;
          const dateVal = dateInput.value;
          const timeVal = timeSlotInput.value;

          if (nameVal.length < 2) {
            showFieldError('patient-name', 'error-patient-name', 'Please enter the patient’s full name.');
            isValid = false;
          } else {
            clearFieldError('patient-name', 'error-patient-name');
          }

          const digitsOnly = phoneVal.replace(/\D/g, '');
          if (digitsOnly.length < 7) {
            showFieldError('patient-phone', 'error-patient-phone', 'Please enter a valid phone number (at least 7 digits).');
            isValid = false;
          } else {
            clearFieldError('patient-phone', 'error-patient-phone');
          }

          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(emailVal)) {
            showFieldError('patient-email', 'error-patient-email', 'Please enter a valid email address.');
            isValid = false;
          } else {
            clearFieldError('patient-email', 'error-patient-email');
          }

          if (!specVal) {
            showFieldError('specialty-select', 'error-specialty', 'Please select a medical department.');
            isValid = false;
          } else {
            clearFieldError('specialty-select', 'error-specialty');
          }

          if (!docVal) {
            showFieldError('doctor-select', 'error-doctor', 'Please select a specialist.');
            isValid = false;
          } else {
            clearFieldError('doctor-select', 'error-doctor');
          }

          if (!dateVal) {
            showFieldError('appointment-date', 'error-date', 'Please choose a preferred appointment date.');
            isValid = false;
          } else {
            clearFieldError('appointment-date', 'error-date');
          }

          const errTime = document.getElementById('error-time');
          if (!timeVal) {
            if (errTime) {
              errTime.textContent = 'Please select an available time slot.';
              errTime.classList.remove('hidden');
            }
            isValid = false;
          } else if (errTime) {
            errTime.classList.add('hidden');
          }

          if (!isValid) return;

          // Format friendly date
          const formattedDate = new Date(dateVal + 'T00:00:00').toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          });

          const refCode = 'CP-' + Math.floor(10000 + Math.random() * 90000);

          document.getElementById('conf-ref-id').textContent = refCode;
          document.getElementById('conf-name').textContent = nameVal;
          document.getElementById('conf-specialty').textContent = specVal;
          document.getElementById('conf-doctor').textContent = docVal;
          document.getElementById('conf-datetime').textContent = `${formattedDate} at ${timeVal}`;
          document.getElementById('conf-contact').textContent = `${phoneVal} • ${emailVal}`;

          // Pre-fill WhatsApp confirmation link
          const waText = encodeURIComponent(
            `Hello CAREPLUS CLINIC! I just booked an appointment.\nRef: ${refCode}\nPatient: ${nameVal}\nDepartment: ${specVal}\nDoctor: ${docVal}\nDate & Time: ${formattedDate} at ${timeVal}`
          );
          document.getElementById('conf-whatsapp-btn').href = `https://wa.me/15552348910?text=${waText}`;

          appointmentForm.classList.add('hidden');
          bookingConfirmation.classList.remove('hidden');
          if (window.lucide) lucide.createIcons();
        });
      }

      if (bookAnotherBtn) {
        bookAnotherBtn.addEventListener('click', () => {
          appointmentForm.reset();
          populateDoctorDropdown();
          timeSlotBtns.forEach((b) => b.classList.remove('selected'));
          if (timeSlotInput) timeSlotInput.value = '';
          bookingConfirmation.classList.add('hidden');
          appointmentForm.classList.remove('hidden');
        });
      }

      // ====================================================================
      // 5. ACCESSIBLE FAQ ACCORDION
      // ====================================================================
      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach((item) => {
        const trigger = item.querySelector('.faq-trigger');
        if (!trigger) return;

        trigger.addEventListener('click', () => {
          const isOpen = item.classList.contains('active');

          // Close other items for clean single-focus readability
          faqItems.forEach((other) => {
            other.classList.remove('active');
            other.classList.remove('bg-brand-sky/35', 'border-brand-blue/15');
            other.classList.add('bg-white', 'border-slate-200');
            const otherBtn = other.querySelector('.faq-trigger');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          });

          if (!isOpen) {
            item.classList.add('active', 'bg-brand-sky/35', 'border-brand-blue/15');
            item.classList.remove('bg-white', 'border-slate-200');
            trigger.setAttribute('aria-expanded', 'true');
          }
        });
      });

      // ====================================================================
      // 6. LIVE CLINIC TIMINGS STATUS CALCULATOR
      // ====================================================================
      function updateClinicOpenStatus() {
        const now = new Date();
        const day = now.getDay(); // 0 = Sun, 1 = Mon ... 6 = Sat
        const minutesNow = now.getHours() * 60 + now.getMinutes();

        let isOpen = false;
        let closingText = '';

        if (day >= 1 && day <= 5) {
          // Mon-Fri: 8:00 AM (480) to 8:00 PM (1200)
          isOpen = minutesNow >= 480 && minutesNow < 1200;
          closingText = isOpen ? 'Open Now • Closes 8:00 PM' : 'Closed • Opens 8:00 AM';
        } else if (day === 6) {
          // Sat: 9:00 AM (540) to 5:00 PM (1020)
          isOpen = minutesNow >= 540 && minutesNow < 1020;
          closingText = isOpen ? 'Open Now • Closes 5:00 PM' : 'Closed • Opens 9:00 AM';
        } else {
          // Sun: 10:00 AM (600) to 2:00 PM (840)
          isOpen = minutesNow >= 600 && minutesNow < 840;
          closingText = isOpen ? 'Open Now • Urgent Care till 2 PM' : 'Closed • Opens Mon 8:00 AM';
        }

        const dotEl = document.getElementById('live-status-dot');
        const textEl = document.getElementById('live-status-text');
        const clockEl = document.getElementById('clinic-local-clock');

        if (dotEl && textEl) {
          dotEl.className = isOpen
            ? 'w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse'
            : 'w-2.5 h-2.5 rounded-full bg-rose-500';
          textEl.textContent = closingText;
        }

        if (clockEl) {
          clockEl.textContent = now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          });
        }
      }

      updateClinicOpenStatus();
      setInterval(updateClinicOpenStatus, 30000);

      // ====================================================================
      // 7. INTERACTIVE VECTOR MAP ZOOM & LANDMARK SELECTION
      // ====================================================================
      const vectorMap = document.getElementById('clinic-vector-map');
      const zoomInBtn = document.getElementById('map-zoom-in');
      const zoomOutBtn = document.getElementById('map-zoom-out');
      const resetMapBtn = document.getElementById('map-reset');
      const mapInfoText = document.getElementById('map-info-text');
      let mapScale = 1;

      function applyMapZoom() {
        if (vectorMap) {
          vectorMap.style.transform = `scale(${mapScale})`;
        }
      }

      if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
          mapScale = Math.min(1.6, +(mapScale + 0.2).toFixed(1));
          applyMapZoom();
        });
      }
      if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => {
          mapScale = Math.max(1, +(mapScale - 0.2).toFixed(1));
          applyMapZoom();
        });
      }
      if (resetMapBtn) {
        resetMapBtn.addEventListener('click', () => {
          mapScale = 1;
          applyMapZoom();
          if (mapInfoText) {
            mapInfoText.textContent = 'CAREPLUS CLINIC • 450 Wellness Blvd, Suite 200 • Ground-Floor Wheelchair Access';
          }
        });
      }

      document.querySelectorAll('#clinic-map-pin, .map-landmark').forEach((el) => {
        el.addEventListener('click', () => {
          const info = el.getAttribute('data-info');
          if (info && mapInfoText) {
            mapInfoText.textContent = info;
          }
        });
      });

      // ====================================================================
      // 8. QUICK CONTACT & NEWSLETTER MINI-FORMS
      // ====================================================================
      const quickContactForm = document.getElementById('quick-contact-form');
      const contactFormStatus = document.getElementById('contact-form-status');

      if (quickContactForm && contactFormStatus) {
        quickContactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const cName = document.getElementById('contact-name').value.trim();
          const cEmail = document.getElementById('contact-email').value.trim();
          const cMsg = document.getElementById('contact-message').value.trim();

          if (!cName || !cEmail || !cMsg) {
            contactFormStatus.textContent = 'Please complete all required fields.';
            contactFormStatus.className = 'text-xs font-semibold text-rose-600 block';
            return;
          }

          contactFormStatus.textContent = `Thank you, ${cName}! Our care desk has received your inquiry.`;
          contactFormStatus.className = 'text-xs font-semibold text-brand-teal block';
          quickContactForm.reset();
        });
      }

      const newsletterForm = document.getElementById('newsletter-form');
      const newsletterMsg = document.getElementById('newsletter-msg');
      if (newsletterForm && newsletterMsg) {
        newsletterForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const emailVal = document.getElementById('newsletter-email').value.trim();
          if (!emailVal) return;
          newsletterMsg.textContent = 'Subscribed! Welcome to CarePlus Health Notes.';
          newsletterMsg.classList.remove('hidden');
          newsletterForm.reset();
        });
      }
    });
