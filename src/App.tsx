import { useEffect, useRef, useState } from "react";
import { 
  MessageSquare, 
  Calendar, 
  FileText, 
  Brain, 
  ShieldCheck, 
  TrendingUp, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  Lock, 
  CheckCircle2, 
  Menu, 
  X, 
  Heart,
  Smile,
  Mail,
  Send
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ── MAIN ROUTER COMPONENT ───────────────────────────────────────────────────
export default function App() {
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    // Check if the URL contains the preview path or query parameter
    const path = window.location.pathname;
    const search = window.location.search;
    if (path === "/preview" || search.includes("preview=true")) {
      setIsPreview(true);
    }
  }, []);

  return isPreview ? <MainLanding /> : <ComingSoon />;
}

// ── COMING SOON VIEW COMPONENT ──────────────────────────────────────────────
function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({ days: 30, hours: 0, minutes: 0, seconds: 0 });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Target date: July 15, 2026
    const targetDate = new Date("2026-07-15T00:00:00-06:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Save locally or print console mock
    localStorage.setItem("saudade_lead_email", email);
    setSubmitted(true);
  };

  return (
    <div className="relative w-full min-h-screen text-charcoal flex flex-col justify-between overflow-x-hidden font-sans">
      
      {/* 3D Mesh Gradient Background */}
      <div className="mesh-bg-container">
        <div className="floating-blob blob-sage"></div>
        <div className="floating-blob blob-lavender"></div>
        <div className="floating-blob blob-sand"></div>
      </div>

      {/* Mini Nav Header */}
      <header className="w-full max-w-7xl mx-auto px-6 h-20 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sage flex items-center justify-center text-white font-display font-semibold text-lg shadow-sm">
            S
          </div>
          <span className="font-display font-semibold text-xl tracking-tight text-charcoal">
            saudade
          </span>
        </div>
        <div>
          <a 
            href="https://app.saudade.mx/auth" 
            className="px-5 py-2.5 bg-white/60 hover:bg-white text-charcoal border border-sage/15 hover:border-sage/30 font-medium text-xs sm:text-sm rounded-xl transition-all duration-200"
          >
            Acceso Psicólogos
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center px-6 py-12 z-10">
        <div className="max-w-xl w-full text-center flex flex-col items-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sage/10 text-sage font-medium text-xs sm:text-sm mb-6 border border-sage/20 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            Lanzamiento Próximamente
          </div>

          {/* Heading */}
          <h1 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight mb-4 tracking-tight">
            El espacio digital que tu <br className="hidden sm:inline" />
            <span className="text-sage font-semibold">práctica clínica merece</span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base text-slate max-w-md leading-relaxed mb-8">
            Estamos construyendo Saudade, la plataforma clínica premium diseñada exclusivamente para psicólogos y terapeutas. Falta muy poco para abrir nuestras puertas.
          </p>

          {/* Countdown Clock Grid */}
          <div className="grid grid-cols-4 gap-3 w-full max-w-sm mb-10">
            {[
              { value: timeLeft.days, label: "Días" },
              { value: timeLeft.hours, label: "Horas" },
              { value: timeLeft.minutes, label: "Min" },
              { value: timeLeft.seconds, label: "Seg" }
            ].map((time, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-3 flex flex-col items-center border border-white/50 shadow-sm">
                <span className="font-display font-semibold text-2xl sm:text-3xl text-charcoal">
                  {String(time.value).padStart(2, "0")}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate font-medium mt-1">
                  {time.label}
                </span>
              </div>
            ))}
          </div>

          {/* Email Capture Form */}
          <div className="w-full max-w-md glass-card rounded-2xl p-5 sm:p-6 border border-white/50 shadow-md">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <p className="text-xs text-slate font-medium text-left">
                  Sé de los primeros en acceder a la prueba exclusiva de 30 días:
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-slate absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                    <input 
                      type="email" 
                      required
                      placeholder="Tu correo electrónico..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-11 pl-10 pr-4 rounded-xl text-xs glass-input font-medium"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="h-11 px-5 bg-sage hover:bg-sage/90 text-white font-medium text-xs rounded-xl shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-1.5 group cursor-pointer"
                  >
                    Notificarme
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex flex-col items-center py-4 gap-2 text-center">
                <CheckCircle2 className="w-8 h-8 text-sage" />
                <h4 className="font-semibold text-charcoal text-sm">¡Registro completado!</h4>
                <p className="text-xs text-slate leading-relaxed max-w-xs">
                  Te avisaremos en cuanto abramos las puertas y te enviaremos tu enlace de invitación para tus 30 días gratuitos.
                </p>
              </div>
            )}
          </div>

        </div>
      </main>

      {/* Mini Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate/60 gap-3 z-10">
        <span>&copy; {new Date().getFullYear()} Saudade. Todos los derechos reservados.</span>
        <div className="flex gap-4">
          <a href="https://app.saudade.mx/politicas" className="hover:text-sage transition-colors">Aviso de Privacidad</a>
          <a href="https://app.saudade.mx/terminos" className="hover:text-sage transition-colors">Términos y Condiciones</a>
        </div>
      </footer>

    </div>
  );
}

// ── FULL MAIN LANDING VIEW COMPONENT ────────────────────────────────────────
function MainLanding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  // 1. Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  // 2. GSAP Animations (Scrollytelling)
  useGSAP(() => {
    // A. Hero animations
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTl.from(".hero-badge", { opacity: 0, y: 20, duration: 0.8, delay: 0.2 })
          .from(".hero-title", { opacity: 0, y: 30, duration: 1, stagger: 0.1 }, "-=0.6")
          .from(".hero-desc", { opacity: 0, y: 20, duration: 0.8 }, "-=0.7")
          .from(".hero-ctas", { opacity: 0, y: 15, duration: 0.6 }, "-=0.6")
          .from(".hero-mockup", { opacity: 0, y: 40, scale: 0.98, duration: 1.2 }, "-=0.4");

    // B. Chaos to Calm Transition (ScrollTrigger)
    const chaosTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: ".chaos-section",
        start: "top 75%",
        end: "bottom 25%",
        scrub: 1,
      }
    });
    
    chaosTrigger.to(".chaos-card", {
      opacity: 0.2,
      scale: 0.95,
      filter: "blur(4px)",
      stagger: 0.1,
    })
    .to(".calm-indicator", {
      backgroundColor: "#7B998F",
      color: "#FFFFFF",
      duration: 0.5
    }, "-=0.2")
    .from(".calm-cards", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1
    }, "-=0.3");

    // C. Sticky Dashboard Scrollytelling
    const stages = ["whatsapp", "clinical", "ai"];
    stages.forEach((stage, idx) => {
      ScrollTrigger.create({
        trigger: `.trigger-section-${stage}`,
        start: "top 45%",
        end: "bottom 45%",
        onEnter: () => activateMockupStage(stage),
        onEnterBack: () => activateMockupStage(stage),
      });
    });

    function activateMockupStage(stage: string) {
      // Set opacity and scale of dashboard elements
      gsap.to(".dashboard-element", {
        opacity: 0.35,
        scale: 0.98,
        borderColor: "rgba(255, 255, 255, 0.4)",
        boxShadow: "none",
        duration: 0.4,
        ease: "power2.out"
      });

      // Highlight active element
      gsap.to(`.element-${stage}`, {
        opacity: 1,
        scale: 1.02,
        borderColor: "#7B998F",
        boxShadow: "0 10px 25px -5px rgba(123, 153, 143, 0.18)",
        duration: 0.5,
        ease: "power2.out"
      });

      // Animate line connectors
      gsap.to(".connector-dot", { opacity: 0, scale: 0, duration: 0.2 });
      gsap.to(`.dot-${stage}`, { opacity: 1, scale: 1.2, duration: 0.4 });
    }

    // D. Bento Box entrance animations
    gsap.from(".bento-box-item", {
      scrollTrigger: {
        trigger: ".bento-section",
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out"
    });

    // E. Pricing Card CTA pulse
    gsap.from(".pricing-card", {
      scrollTrigger: {
        trigger: ".pricing-section",
        start: "top 75%",
      },
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "back.out(1.2)"
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full overflow-x-hidden min-h-screen text-charcoal">
      
      {/* 3D Mesh Gradient Background */}
      <div className="mesh-bg-container">
        <div className="floating-blob blob-sage"></div>
        <div className="floating-blob blob-lavender"></div>
        <div className="floating-blob blob-sand"></div>
      </div>

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sage flex items-center justify-center text-white font-display font-semibold text-lg shadow-sm">
              S
            </div>
            <span className="font-display font-semibold text-xl tracking-tight text-charcoal">
              saudade
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate">
            <a href="#experiencia" className="hover:text-sage transition-colors">La Experiencia</a>
            <a href="#dashboard" className="hover:text-sage transition-colors">Dashboard</a>
            <a href="#bento" className="hover:text-sage transition-colors">Funcionalidades</a>
            <a href="#precios" className="hover:text-sage transition-colors">Precios</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://app.saudade.mx/auth" 
              className="text-sm font-semibold text-charcoal hover:text-sage transition-colors px-4 py-2"
            >
              Iniciar sesión
            </a>
            <a 
              href="https://app.saudade.mx/auth?signup=true" 
              className="px-5 py-2.5 bg-sage hover:bg-sage/90 text-white font-medium text-sm rounded-xl shadow-sm hover:shadow transition-all hover:-translate-y-0.5 duration-200"
            >
              Comenzar gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate hover:text-charcoal focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-nav absolute top-20 left-0 w-full flex flex-col p-6 gap-5 shadow-lg border-t border-sage/10 animate-fade-in">
            <a 
              href="#experiencia" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate hover:text-sage"
            >
              La Experiencia
            </a>
            <a 
              href="#dashboard" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate hover:text-sage"
            >
              Dashboard
            </a>
            <a 
              href="#bento" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate hover:text-sage"
            >
              Funcionalidades
            </a>
            <a 
              href="#precios" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate hover:text-sage"
            >
              Precios
            </a>
            <hr className="border-sage/10 my-2" />
            <a 
              href="https://app.saudade.mx/auth" 
              className="text-base font-semibold text-charcoal text-center py-2"
            >
              Iniciar sesión
            </a>
            <a 
              href="https://app.saudade.mx/auth?signup=true" 
              className="w-full text-center py-3 bg-sage text-white font-medium rounded-xl shadow-sm"
            >
              Comenzar gratis
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="hero-badge inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sage/10 text-sage font-medium text-xs md:text-sm mb-6 border border-sage/20">
            <Sparkles className="w-3.5 h-3.5" />
            Calm Tech para Psicólogos y Terapeutas
          </div>
          
          <h1 className="hero-title font-display font-semibold text-4xl sm:text-5xl md:text-6xl text-charcoal leading-[1.12] mb-6 tracking-tight">
            El flujo administrativo <br className="hidden sm:inline" />
            <span className="text-sage">se vuelve paz mental</span>
          </h1>
          
          <p className="hero-desc text-lg md:text-xl text-slate max-w-2xl leading-relaxed mb-8">
            Saudade es la plataforma clínica premium que automatiza tu WhatsApp, gestiona tus expedientes clínicos con IA y simplifica tus finanzas. Creado para que te enfoques en lo que realmente importa: la terapia.
          </p>

          <div className="hero-ctas flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <a 
              href="#precios" 
              className="w-full sm:w-auto px-8 py-4 bg-sage hover:bg-sage/90 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 duration-200 flex items-center justify-center gap-2 group"
            >
              Prueba 30 días gratis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a 
              href="#experiencia" 
              className="w-full sm:w-auto px-8 py-4 bg-white/70 hover:bg-white text-charcoal border border-sage/15 hover:border-sage/30 font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              Conocer la experiencia
            </a>
          </div>
        </div>

        {/* Hero Interactive App Mockup Preview */}
        <div className="hero-mockup w-full max-w-5xl mx-auto glass-card rounded-2xl border border-white/50 p-3 shadow-2xl relative">
          <div className="w-full bg-[#FAF9F6] rounded-xl border border-sage/10 aspect-[16/10] overflow-hidden flex shadow-inner">
            {/* Sidebar */}
            <div className="w-16 md:w-20 bg-sage/5 border-r border-sage/10 flex flex-col items-center py-6 gap-8">
              <div className="w-8 h-8 rounded-lg bg-sage flex items-center justify-center text-white font-bold text-sm">S</div>
              <div className="flex flex-col gap-6 items-center text-sage/60">
                <div className="p-2 rounded-lg bg-sage/10 text-sage"><Calendar className="w-4 h-4" /></div>
                <div className="p-2 rounded-lg hover:bg-sage/5 hover:text-sage transition-colors"><Smile className="w-4 h-4" /></div>
                <div className="p-2 rounded-lg hover:bg-sage/5 hover:text-sage transition-colors"><FileText className="w-4 h-4" /></div>
                <div className="p-2 rounded-lg hover:bg-sage/5 hover:text-sage transition-colors"><TrendingUp className="w-4 h-4" /></div>
                <div className="p-2 rounded-lg hover:bg-sage/5 hover:text-sage transition-colors"><Brain className="w-4 h-4" /></div>
              </div>
            </div>
            
            {/* Workspace */}
            <div className="flex-1 flex flex-col bg-[#FAF9F6]">
              {/* Header */}
              <div className="h-14 border-b border-sage/10 px-6 flex items-center justify-between text-xs text-slate">
                <span className="font-semibold text-charcoal font-display text-sm">Consultorio Dra. Elena Ruiz</span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-sage" /> Sincronizado</span>
                  <div className="w-7 h-7 rounded-full bg-sage/20 border border-sage/30 flex items-center justify-center text-[10px] text-sage font-bold">ER</div>
                </div>
              </div>
              
              {/* Dash Layout */}
              <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
                {/* Agenda */}
                <div className="bg-white/75 rounded-xl border border-sage/5 p-4 flex flex-col shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-charcoal text-xs flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-sage" /> Agenda de hoy</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-sage/10 text-sage">3 Citas</span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <div className="p-2.5 rounded-lg bg-sage/5 border-l-2 border-sage flex flex-col gap-1">
                      <span className="font-semibold text-charcoal text-[11px]">09:00 - Mateo Silva</span>
                      <span className="text-[9px] text-slate">Terapia de Pareja · Confirmado por WhatsApp ✅</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-sand/20 border-l-2 border-sand flex flex-col gap-1">
                      <span className="font-semibold text-charcoal text-[11px]">11:30 - Clara Valenzuela</span>
                      <span className="text-[9px] text-slate">Ansiedad Generalizada · Recordatorio enviado 💬</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-100 flex flex-col gap-1">
                      <span className="font-semibold text-charcoal text-[11px]">16:00 - Rodrigo Díaz</span>
                      <span className="text-[9px] text-slate">Sesión Inicial · Pendiente de confirmar ⏳</span>
                    </div>
                  </div>
                </div>
                
                {/* Whatsapp */}
                <div className="bg-white/75 rounded-xl border border-sage/5 p-4 flex flex-col shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-charcoal text-xs flex items-center gap-1.5"><MessageSquare className="w-3.5 h-3.5 text-sage" /> WhatsApp Automatizado</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <div className="flex-1 bg-[#F0F2F5] rounded-lg p-2.5 flex flex-col gap-2 overflow-y-auto max-h-[160px] text-[10px]">
                    <div className="bg-white self-start max-w-[85%] p-2 rounded-lg rounded-tl-none shadow-sm flex flex-col">
                      <span className="text-slate text-[8px] font-medium">Saudade Bot</span>
                      <span>Hola Mateo, recuerda tu sesión de hoy a las 5:00 PM con la Dra. Elena. Confirma respondiendo 1 o reagenda con 2.</span>
                    </div>
                    <div className="bg-[#D9FDD3] self-end max-w-[85%] p-2 rounded-lg rounded-tr-none shadow-sm text-right">
                      <span>1, confirmado gracias!</span>
                    </div>
                    <div className="bg-white self-start max-w-[85%] p-2 rounded-lg rounded-tl-none shadow-sm flex flex-col">
                      <span className="text-slate text-[8px] font-medium">Saudade Bot</span>
                      <span>¡Perfecto! Hemos registrado tu confirmación. Nos vemos al rato. ✅</span>
                    </div>
                  </div>
                </div>

                {/* AI Summary */}
                <div className="bg-white/75 rounded-xl border border-sage/5 p-4 flex flex-col shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-charcoal text-xs flex items-center gap-1.5"><Brain className="w-3.5 h-3.5 text-sage" /> Copiloto Clínico IA</span>
                    <Sparkles className="w-3.5 h-3.5 text-sage animate-pulse" />
                  </div>
                  <div className="p-3 bg-sage/5 rounded-lg border border-sage/10 text-[10px] flex flex-col gap-2 leading-relaxed">
                    <span className="font-semibold text-sage flex items-center gap-1"><Sparkles className="w-3 h-3" /> Resumen de Sesión</span>
                    <p className="text-slate">El paciente reportó menor intensidad en los episodios de ansiedad social esta semana (pasa de 7/10 a 4/10). Identifica pensamiento automático de desaprobación en el trabajo.</p>
                    <div className="flex gap-1.5 flex-wrap mt-1">
                      <span className="px-1.5 py-0.5 rounded bg-sage/15 text-[8px] font-medium text-sage">Ansiedad Social</span>
                      <span className="px-1.5 py-0.5 rounded bg-sage/15 text-[8px] font-medium text-sage">Progreso: Favorable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chaos to Calm Narrative Section */}
      <section id="experiencia" className="chaos-section py-24 bg-white/40 border-y border-sage/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-xs font-semibold tracking-wider text-sage uppercase mb-2 block">La Transición</span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-charcoal leading-tight">
              De la sobrecarga administrativa <br className="hidden sm:inline" />
              <strong className="font-semibold text-sage">al espacio terapéutico ideal</strong>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left: Administrative Chaos */}
            <div className="glass-card p-8 md:p-10 rounded-2xl border border-red-200/40 relative flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-100/30 rounded-bl-full flex items-center justify-center text-red-400">
                <Clock className="w-8 h-8 mr-2 mt-2" />
              </div>
              
              <div>
                <div className="h-2 w-16 bg-red-200 rounded-full mb-6"></div>
                <h3 className="font-display font-medium text-2xl text-charcoal mb-4">El Caos Cotidiano</h3>
                <p className="text-slate text-sm leading-relaxed mb-8">
                  Expedientes clínicos esparcidos entre libretas, notas adhesivas en la laptop, pacientes que olvidan citas y el teléfono vibrando sin parar a mitad de una sesión.
                </p>
                
                <div className="flex flex-col gap-3.5 mb-8">
                  {["Perder tiempo valioso escribiendo recordatorios manuales.", 
                    "Preocupación constante por la confidencialidad de tus archivos.", 
                    "Falta de control real sobre los ingresos y facturación de la consulta."
                  ].map((text, i) => (
                    <div key={i} className="chaos-card flex items-start gap-3 p-3 bg-red-50/20 border border-red-100/50 rounded-lg text-slate text-xs">
                      <span className="text-red-400 font-semibold mt-0.5">✕</span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <span className="text-xs font-semibold text-red-400 tracking-wider uppercase">Estrés Administrativo</span>
            </div>

            {/* Right: Calm & Order */}
            <div className="glass-card p-8 md:p-10 rounded-2xl border border-sage/30 relative flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sage/10 rounded-bl-full flex items-center justify-center text-sage">
                <CheckCircle2 className="w-8 h-8 mr-2 mt-2" />
              </div>

              <div>
                <div className="h-2 w-16 bg-sage/40 rounded-full mb-6"></div>
                <h3 className="font-display font-medium text-2xl text-charcoal mb-4">La Paz con Saudade</h3>
                <p className="text-slate text-sm leading-relaxed mb-8">
                  Un flujo clínico silencioso y elegante. Los pacientes reciben avisos automáticos y confirman por WhatsApp. Tus expedientes están en la nube de forma segura y estructurada.
                </p>
                
                <div className="calm-cards flex flex-col gap-3.5 mb-8">
                  {["Avisos automatizados que reducen el ausentismo en un 85%.", 
                    "Arquitectura blindada de alta confidencialidad y regulaciones médicas.", 
                    "Copiloto clínico que genera resúmenes automatizados de tus notas."
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-sage/5 border border-sage/10 rounded-lg text-slate text-xs">
                      <span className="text-sage font-semibold mt-0.5">✓</span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <span className="calm-indicator text-xs font-semibold text-sage tracking-wider uppercase inline-block self-start px-2 py-0.5 rounded bg-sage/5">
                Flujo Controlado y Clínico
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Scroll Scrollytelling Section */}
      <section id="dashboard" className="relative w-full py-16 lg:py-24 bg-[#FAF9F6]/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
            <span className="text-xs font-semibold tracking-wider text-sage uppercase mb-2 block">El Sistema Inteligente</span>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal leading-tight">
              Toma el control absoluto de tu consulta
            </h2>
            <p className="text-slate text-sm mt-3 max-w-xl mx-auto leading-relaxed">
              Haz scroll para explorar las tres columnas fundamentales de la tecnología de Saudade en acción.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row relative">
            
            {/* Left Column: Scrollable Text triggers */}
            <div className="w-full lg:w-5/12 pr-0 lg:pr-12 relative z-10">
              
              {/* Section 1: WhatsApp */}
              <div className="trigger-section-whatsapp min-h-[70vh] lg:min-h-screen flex flex-col justify-center py-12">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sage/10 text-sage font-medium text-xs mb-4 border border-sage/20 self-start">
                  <MessageSquare className="w-3.5 h-3.5" />
                  Meta API Oficial
                </div>
                <h3 className="font-display font-semibold text-2xl md:text-3xl text-charcoal mb-4">
                  1. WhatsApp Automático sin fricción
                </h3>
                <p className="text-slate text-sm leading-relaxed mb-6">
                  Se acabó escribir recordatorios manuales todos los días o usar bots poco fiables. Saudade se integra directamente con la API oficial de Meta para enviar confirmaciones automáticas.
                </p>
                <ul className="flex flex-col gap-3 text-slate text-xs">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage"></span>
                    <span>Tus pacientes confirman, cancelan o reagendan con un solo mensaje.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage"></span>
                    <span>Actualización en tiempo real del estado de tu agenda.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage"></span>
                    <span>Remitente profesional sin riesgo de bloqueos de cuenta.</span>
                  </li>
                </ul>
              </div>

              {/* Section 2: Clinical Tracker */}
              <div className="trigger-section-clinical min-h-[70vh] lg:min-h-screen flex flex-col justify-center py-12">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sage/10 text-sage font-medium text-xs mb-4 border border-sage/20 self-start">
                  <FileText className="w-3.5 h-3.5" />
                  Expediente Clínico Digital
                </div>
                <h3 className="font-display font-semibold text-2xl md:text-3xl text-charcoal mb-4">
                  2. Notas de Evolución en segundos
                </h3>
                <p className="text-slate text-sm leading-relaxed mb-6">
                  Estructura el historial médico y las notas de tus pacientes con plantillas estandarizadas que cumplen con las normativas oficiales de salud.
                </p>
                <ul className="flex flex-col gap-3 text-slate text-xs">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage"></span>
                    <span>Plantillas optimizadas para psicoterapia clínica.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage"></span>
                    <span>Firma digital integrada para blindar legalmente tus expedientes.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage"></span>
                    <span>Buscador avanzado para consultar sesiones previas al instante.</span>
                  </li>
                </ul>
              </div>

              {/* Section 3: AI Assistant */}
              <div className="trigger-section-ai min-h-[70vh] lg:min-h-screen flex flex-col justify-center py-12">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sage/10 text-sage font-medium text-xs mb-4 border border-sage/20 self-start">
                  <Brain className="w-3.5 h-3.5" />
                  Copiloto Clínico Seguro
                </div>
                <h3 className="font-display font-semibold text-2xl md:text-3xl text-charcoal mb-4">
                  3. Copiloto Clínico con Inteligencia Artificial
                </h3>
                <p className="text-slate text-sm leading-relaxed mb-6">
                  Dedica tu energía a escuchar al paciente. Nuestra IA procesa tus apuntes rápidos de sesión y los convierte en resúmenes estructurados y diagnósticos preliminares de alta calidad.
                </p>
                <ul className="flex flex-col gap-3 text-slate text-xs">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage"></span>
                    <span>Genera resúmenes ejecutivos listos para archivar en un clic.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage"></span>
                    <span>Identifica patrones cognitivos y conductuales recurrentes.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage"></span>
                    <span>Garantía absoluta de privacidad en la encriptación de datos.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: Sticky Dashboard Viewport */}
            <div className="hidden lg:block w-7/12 sticky top-[15vh] h-[70vh] z-20 flex items-center justify-center pl-8">
              
              <div className="relative w-full max-w-[620px] aspect-[16/10] bg-white rounded-2xl border border-sage/15 p-2 shadow-2xl overflow-hidden flex flex-col">
                
                {/* App frame controls */}
                <div className="h-10 border-b border-slate-100 flex items-center justify-between px-4 text-[10px] text-slate">
                  <div className="flex gap-1.5 items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/70"></span>
                  </div>
                  <span className="font-display text-xs font-semibold text-charcoal">saudade.mx/app</span>
                  <div className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-400">?</div>
                </div>

                {/* Dashboard grid inner content */}
                <div className="flex-1 bg-[#FAF9F6] p-4 flex gap-4 overflow-hidden relative">
                  
                  {/* Left: Interactive elements (WhatsApp & Notes) */}
                  <div className="flex-1 flex flex-col gap-4 overflow-hidden">
                    
                    {/* Element: WhatsApp */}
                    <div className="dashboard-element element-whatsapp bg-white p-3.5 rounded-xl border border-slate-100 flex flex-col gap-2 relative transition-all duration-300">
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600">
                        <MessageSquare className="w-3.5 h-3.5" />
                        WhatsApp API Oficial
                      </div>
                      
                      <div className="bg-[#EAEAEA]/40 p-2 rounded-lg text-[9px] flex flex-col gap-1 text-slate">
                        <span className="font-medium text-[8px] text-sage">Recordatorio Enviado:</span>
                        <span>"Clara, tienes cita mañana 10 AM. Responde 1 para confirmar"</span>
                        <div className="flex items-center gap-1.5 justify-end text-[8.5px] font-semibold text-emerald-600 mt-1">
                          <CheckCircle2 className="w-3 h-3" /> Paciente confirmó cita
                        </div>
                      </div>

                      {/* Line connector dot */}
                      <span className="connector-dot dot-whatsapp absolute -right-2 top-1/2 w-4 h-4 bg-sage rounded-full border-2 border-white shadow-md transform -translate-y-1/2 opacity-0 scale-0"></span>
                    </div>

                    {/* Element: Clinical Tracker */}
                    <div className="dashboard-element element-clinical bg-white p-3.5 rounded-xl border border-slate-100 flex flex-col gap-2 relative transition-all duration-300">
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-indigo-600">
                        <FileText className="w-3.5 h-3.5" />
                        Notas Clínicas del Paciente
                      </div>
                      
                      <div className="p-2 border border-slate-100 rounded-lg text-[9px] text-slate leading-relaxed flex flex-col gap-1.5">
                        <span className="font-semibold text-charcoal">Sesión 4: Manejo de Ansiedad</span>
                        <p className="italic text-[8.5px]">"Paciente reporta reducción en los ataques de pánico mediante reestructuración cognitiva."</p>
                        <div className="flex items-center justify-between text-[8px] border-t border-slate-50 pt-1.5 mt-0.5">
                          <span className="text-slate-400">Firmado digitalmente</span>
                          <span className="text-indigo-600 font-display font-medium">Dra. Elena Ruiz 🖋️</span>
                        </div>
                      </div>

                      {/* Line connector dot */}
                      <span className="connector-dot dot-clinical absolute -right-2 top-1/2 w-4 h-4 bg-sage rounded-full border-2 border-white shadow-md transform -translate-y-1/2 opacity-0 scale-0"></span>
                    </div>

                  </div>

                  {/* Right: AI Panel */}
                  <div className="w-[190px] flex flex-col gap-4">
                    
                    {/* Element: AI Copilot */}
                    <div className="dashboard-element element-ai flex-1 bg-white p-3.5 rounded-xl border border-slate-100 flex flex-col gap-2.5 relative transition-all duration-300">
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-amber-600">
                        <Brain className="w-3.5 h-3.5" />
                        Copiloto IA
                      </div>
                      
                      <div className="flex-1 bg-amber-50/20 rounded-lg border border-amber-100/50 p-2.5 text-[9px] flex flex-col gap-2">
                        <span className="font-semibold text-amber-700 flex items-center gap-1 text-[8.5px]">
                          <Sparkles className="w-2.5 h-2.5" /> Análisis Clínico
                        </span>
                        <div className="flex flex-col gap-1 text-slate leading-relaxed">
                          <span className="font-medium text-charcoal">Sugerencias:</span>
                          <span>- Vigilar creencias limitantes.</span>
                          <span>- Tarea: Diario emocional.</span>
                        </div>
                        <div className="mt-auto pt-1.5 border-t border-amber-100/50 flex justify-between text-[7.5px] font-semibold text-amber-700">
                          <span>Confidencialidad HIPAA</span>
                          <span>Listo ✓</span>
                        </div>
                      </div>

                      {/* Line connector dot */}
                      <span className="connector-dot dot-ai absolute -left-2 top-1/2 w-4 h-4 bg-sage rounded-full border-2 border-white shadow-md transform -translate-y-1/2 opacity-0 scale-0"></span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Bento Box Grid Feature Highlights */}
      <section id="bento" className="bento-section py-24 bg-white/60 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="text-xs font-semibold tracking-wider text-sage uppercase mb-2 block">Características</span>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal leading-tight">
              Diseñado al mínimo detalle para tu práctica clínica
            </h2>
            <p className="text-slate text-sm mt-3 max-w-xl mx-auto leading-relaxed">
              Descubre todas las herramientas optimizadas bajo una misma plataforma fluida y de máxima seguridad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento 1: Agenda Inteligente (Col-span 2) */}
            <div className="bento-box-item md:col-span-2 glass-card p-6 md:p-8 rounded-2xl border border-white/50 flex flex-col md:flex-row justify-between gap-6 glass-card-hover">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sage/10 text-sage flex items-center justify-center mb-5 border border-sage/20">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-charcoal mb-2">Agenda Inteligente y Reservas</h3>
                  <p className="text-slate text-xs leading-relaxed max-w-md">
                    Tu portal de reservas permite a tus pacientes programar sesiones en tus horarios disponibles de forma fluida. Se actualiza automáticamente evitando el traslape de citas.
                  </p>
                </div>
                <div className="mt-8 flex gap-3 text-[10px] font-semibold text-sage">
                  <span className="px-2.5 py-1 rounded-md bg-sage/10">Sincronización Google</span>
                  <span className="px-2.5 py-1 rounded-md bg-sage/10">Zonas Horarias</span>
                </div>
              </div>
              
              <div className="w-full md:w-56 bg-slate-50/50 rounded-xl border border-slate-100 p-4 text-[10.5px]">
                <div className="text-slate-400 font-medium text-[9px] mb-3 uppercase tracking-wider">Tus Horarios Disponibles</div>
                <div className="flex flex-col gap-2">
                  <div className="p-2 rounded-lg bg-white border border-slate-100 flex items-center justify-between">
                    <span>Lunes 10:00 AM</span>
                    <span className="text-sage font-bold">Disponible</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-slate-100 flex items-center justify-between opacity-50">
                    <span>Lunes 12:00 PM</span>
                    <span className="text-slate-400">Reservado</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-slate-100 flex items-center justify-between">
                    <span>Lunes 04:00 PM</span>
                    <span className="text-sage font-bold">Disponible</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento 2: Finanzas (Col-span 1) */}
            <div className="bento-box-item glass-card p-6 md:p-8 rounded-2xl border border-white/50 flex flex-col justify-between glass-card-hover">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 border border-indigo-100">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-xl text-charcoal mb-2">Control Financiero</h3>
                <p className="text-slate text-xs leading-relaxed">
                  Lleva el registro de tus cobros, sesiones pendientes de pago y facturación mensual de manera automática y gráfica.
                </p>
              </div>
              <div className="bg-indigo-50/20 border border-indigo-100/30 rounded-xl p-4 mt-6 text-[10px] flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-slate">Ingresos este mes:</span>
                  <span className="font-bold text-indigo-600">+$18,500 MXN</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: "75%" }}></div>
                </div>
                <span className="text-[9px] text-slate-400">75% de la meta mensual alcanzada</span>
              </div>
            </div>

            {/* Bento 3: Privacidad (Col-span 1) */}
            <div className="bento-box-item glass-card p-6 md:p-8 rounded-2xl border border-white/50 flex flex-col justify-between glass-card-hover">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-xl text-charcoal mb-2">Seguridad Absoluta</h3>
                <p className="text-slate text-xs leading-relaxed">
                  Arquitectura robusta y cifrado SSL de extremo a extremo que cumple con las normativas internacionales de protección de datos médicos.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-[10px] text-emerald-600 font-semibold bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100/50">
                <Lock className="w-3.5 h-3.5" />
                <span>Cumplimiento HIPAA / LFPDPPP</span>
              </div>
            </div>

            {/* Bento 4: Consentimientos firmados (Col-span 2) */}
            <div className="bento-box-item md:col-span-2 glass-card p-6 md:p-8 rounded-2xl border border-white/50 flex flex-col md:flex-row justify-between gap-6 glass-card-hover">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 border border-amber-100">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-charcoal mb-2">Consentimientos Informados</h3>
                  <p className="text-slate text-xs leading-relaxed max-w-md">
                    Envía el consentimiento informado de manera previa a la sesión. Tus pacientes pueden firmarlo digitalmente en su celular y se guarda automáticamente adjunto a su expediente clínico.
                  </p>
                </div>
                <div className="mt-8 flex gap-3 text-[10px] font-semibold text-amber-700">
                  <span className="px-2.5 py-1 rounded-md bg-amber-50">Validez Legal</span>
                  <span className="px-2.5 py-1 rounded-md bg-amber-50">Firma Táctil</span>
                </div>
              </div>

              <div className="w-full md:w-56 bg-amber-50/10 rounded-xl border border-amber-100/50 p-4 text-[10px]">
                <div className="font-semibold text-charcoal mb-2">Consentimiento Informado</div>
                <div className="text-slate leading-relaxed border-b border-amber-100 pb-3 mb-3 text-[8.5px]">
                  Acepto los términos y condiciones de la intervención psicológica de forma libre y voluntaria...
                </div>
                <div className="flex flex-col gap-1 text-[9px]">
                  <span className="text-slate-400">Firma del paciente:</span>
                  <span className="font-display italic font-semibold text-charcoal text-[11px]">Mateo Silva G. 🖋️</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing / Call-to-Action Section */}
      <section id="precios" className="pricing-section py-24 relative overflow-hidden bg-[#FAF9F6]/50">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-wider text-sage uppercase mb-2 block">Suscripción Única</span>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal leading-tight">
              Sencillo, transparente y sin plazos
            </h2>
            <p className="text-slate text-sm mt-3 leading-relaxed max-w-lg mx-auto">
              Accede a todas las herramientas profesionales en un solo plan diseñado para psicólogos independientes.
            </p>
          </div>

          {/* Toggle Mensual / Anual */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className={`text-sm font-semibold transition-colors duration-200 ${billingCycle === 'monthly' ? 'text-charcoal' : 'text-slate/60'}`}>
              Mensual
            </span>
            
            <button
              onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none bg-sage/20 cursor-pointer"
              aria-label="Cambiar ciclo de facturación"
            >
              <div className={`absolute top-0.5 w-5 h-5 bg-sage rounded-full shadow-md transition-all duration-300 ${billingCycle === 'annual' ? 'left-[calc(100%-1.375rem)]' : 'left-0.5'}`} />
            </button>

            <span className={`text-sm font-semibold transition-colors duration-200 ${billingCycle === 'annual' ? 'text-charcoal' : 'text-slate/60'}`}>
              Anual
            </span>

            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
              Ahorra 16% (2 meses gratis)
            </span>
          </div>

          {/* Pricing Card */}
          <div className="pricing-card max-w-md mx-auto glass-card rounded-3xl border border-sage/20 p-8 md:p-10 shadow-2xl relative bg-white/95">
            {/* Ribbon */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-sage text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Plan Profesional Todo Incluido
            </div>
            
            <div className="mt-4 flex flex-col items-center">
              {billingCycle === 'monthly' ? (
                <>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-display text-4xl sm:text-5xl font-semibold text-charcoal">$749</span>
                    <span className="text-slate font-medium text-base">MXN/mes</span>
                  </div>
                  <p className="text-xs text-sage font-medium mt-2">Prueba gratuita de 30 días. Cancela cuando quieras.</p>
                </>
              ) : (
                <>
                  <span className="font-display text-slate text-sm line-through">$8,988 MXN</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-display text-4xl sm:text-5xl font-semibold text-charcoal">$7,490</span>
                    <span className="text-slate font-medium text-base">MXN/año</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 mt-1">
                    <span className="text-[10px] text-slate font-medium">$624 MXN/mes efectivo</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      Ahorras $1,498 MXN al año
                    </span>
                  </div>
                  <p className="text-xs text-sage font-medium mt-2">Prueba gratuita de 30 días. Cancela cuando quieras.</p>
                </>
              )}
            </div>

            <hr className="border-sage/10 my-8" />

            <div className="flex flex-col gap-4 text-left text-xs text-slate mb-8">
              {[
                "Recordatorios de citas automatizados por WhatsApp.",
                "Expediente Clínico y consentimiento informado ilimitados.",
                "Asistencia Clínica y análisis de sesiones con Inteligencia Artificial.",
                "Control financiero e informes mensuales sencillos.",
                "Calendario y portal de reservas propio para pacientes."
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <a 
              href={`https://app.saudade.mx/auth?signup=true&plan=${billingCycle === 'monthly' ? 'pro_monthly' : 'pro_annual'}`} 
              className="w-full py-4 bg-sage hover:bg-sage/90 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200 block text-center"
            >
              Comenzar prueba gratis ahora
            </a>
            <span className="text-[10px] text-slate-400 block mt-3">No requiere tarjeta de crédito para iniciar la prueba.</span>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white/90 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12 border-b border-slate-800 pb-10">
          
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sage flex items-center justify-center text-white font-display font-semibold text-lg">
                S
              </div>
              <span className="font-display font-semibold text-xl tracking-tight text-white">
                saudade
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              La plataforma SaaS de flujo clínico inteligente y Calm Tech que devuelve la paz mental a los profesionales de la salud mental.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Legal</span>
            <div className="flex flex-col gap-2 text-xs text-slate-300">
              <a href="https://app.saudade.mx/politicas" className="hover:text-sage transition-colors">Aviso de Privacidad</a>
              <a href="https://app.saudade.mx/terminos" className="hover:text-sage transition-colors">Términos y Condiciones</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Contacto</span>
            <div className="flex flex-col gap-2 text-xs text-slate-300">
              <span>Soporte: hola@saudade.mx</span>
              <span>Tijuana, Baja California, México</span>
            </div>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between text-xs text-slate-400 gap-4">
          <span>&copy; {new Date().getFullYear()} Saudade. Todos los derechos reservados.</span>
          <span className="flex items-center gap-1">Hecho con <Heart className="w-3.5 h-3.5 text-sage fill-sage" /> para la psicología y bienestar.</span>
        </div>
      </footer>

    </div>
  );
}
