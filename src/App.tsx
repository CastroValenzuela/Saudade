import React, { useState } from "react";
import {
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
  Mail,
  Send,
  MessageSquare,
  Users,
  ChevronDown,
  Star,
  DollarSign,
  Tablet,
  Laptop,
  Building2,
  Check,
  HelpCircle,
  Video,
  FileSignature,
  Smartphone,
  Award
} from "lucide-react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // ── Alliances & Certifications for the Infinite Marquee ──
  const alliances = [
    { title: "Cumplimiento Oficial", sub: "NOM-024-SSA3-2012", badge: "Secretaría de Salud" },
    { title: "Expediente Clínico", sub: "NOM-004-SSA3-2012", badge: "Norma Federal" },
    { title: "Cifrado Militar", sub: "AES-256 bits End-to-End", badge: "Seguridad Médica" },
    { title: "Meta Oficial", sub: "WhatsApp Business API", badge: "Cloud Solution" },
    { title: "Colegio Mexicano", sub: "de Profesionistas en Psicología", badge: "Gremio" },
    { title: "Sociedad Mexicana", sub: "de Psicología (SMP)", badge: "Afiliación" },
    { title: "Facturación SAT", sub: "CFDI 4.0 Honorarios Médicos", badge: "Fiscal México" },
    { title: "Stripe Healthcare", sub: "Cobros SPEI y Tarjetas", badge: "PCI-DSS Nivel 1" },
    { title: "Cédula Profesional", sub: "Validación SEP / DGPS", badge: "Registro Oficial" },
  ];

  // ── Interactive Feature Tabs ──
  const featureTabs = [
    {
      id: "expediente",
      title: "Expediente NOM-024",
      icon: FileText,
      badge: "Cumplimiento Sanitario Obligatorio",
      headline: "Expedientes clínicos digitales 100% legales, seguros y ordenados",
      description:
        "Olvida los archiveros de papel y las carpetas desorganizadas. Cada paciente cuenta con su expediente clínico digital con historial psicopatológico, consentimientos informados firmados digitalmente y bitácora de auditoría inmutable conforme a la NOM-024-SSA3 y NOM-004-SSA3.",
      bullets: [
        "Firma electrónica de consentimiento informado desde el celular del paciente",
        "Diagnósticos estructurados compatibles con CIE-10 / CIE-11 y DSM-5",
        "Subida de pruebas psicométricas, dibujos y estudios en PDF e imágenes",
        "Acceso instantáneo desde cualquier computadora, iPad o teléfono"
      ],
      tag: "Ficha Clínica de Paciente",
      patientName: "Mariana Vega Morales",
      patientAge: "28 años · Psicoterapia Individual",
      dx: "F41.1 Trastorno de Ansiedad Generalizada",
      stat: "100%",
      statDesc: "Alineado a NOM-024"
    },
    {
      id: "agenda",
      title: "Agenda & WhatsApp",
      icon: MessageSquare,
      badge: "WhatsApp Business Cloud API Oficial",
      headline: "Recordatorios automáticos por WhatsApp que eliminan las faltas",
      description:
        "Las cancelaciones de último momento son el mayor dolor financiero del psicólogo. Saudade envía recordatorios automáticos y elegantes 24 y 2 horas antes de cada sesión con botones interactivos para confirmar o reagendar.",
      bullets: [
        "Reduce el ausentismo y cancelaciones imprevistas en más de un 70%",
        "Sincronización bidireccional inmediata con Google Calendar y Apple Calendar",
        "El paciente confirma con un toque y tu agenda se actualiza al instante",
        "Portal de auto-agendamiento para que pacientes elijan sus horarios disponibles"
      ],
      tag: "Mensajería Oficial WhatsApp",
      patientName: "Carlos Domínguez Rivas",
      patientAge: "Sesión 8 · Hoy 4:00 PM",
      dx: "Confirmado automáticamente por WhatsApp",
      stat: "-72%",
      statDesc: "Menos ausentismo"
    },
    {
      id: "ia-ipad",
      title: "Notas con IA & iPad",
      icon: Brain,
      badge: "Exclusivo para Psicólogos",
      headline: "Dictado por voz, notas SOAP con IA y lienzo manuscrito para Apple Pencil",
      description:
        "Termina tu consulta y ten tu nota clínica redactada en menos de 45 segundos. Dicta tus impresiones por voz o dibuja diagramas cognitivos en tu iPad. Nuestra Inteligencia Artificial especializada en psicología clínica estructurará tu nota en formato SOAP o narrativo al instante.",
      bullets: [
        "Estructuración automática en formato SOAP (Subjetivo, Objetivo, Análisis, Plan)",
        "Lienzo táctil de alta precisión para escribir y diagramar con Apple Pencil",
        "Dictado por voz clínico con vocabulario psicológico especializado",
        "Exportación a PDF oficial con sello de tiempo y cédula profesional"
      ],
      tag: "Asistente Clínico Inteligente",
      patientName: "Nota de Evolución #6",
      patientAge: "Generada en 35 segundos con IA",
      dx: "Estructura SOAP validada por el terapeuta",
      stat: "8 hrs",
      statDesc: "Ahorradas por semana"
    },
    {
      id: "videoconsulta",
      title: "Consultorio Virtual",
      icon: Video,
      badge: "Videollamadas Médicas Cifradas",
      headline: "Terapia online segura sin instalar apps ni enlaces caídos de Zoom",
      description:
        "Atiende a pacientes en cualquier parte de México o el mundo con una sala de videoconsulta HD protegida con cifrado de grado médico. Tu paciente entra con un solo clic desde su navegador web sin necesidad de registrarse ni descargar aplicaciones.",
      bullets: [
        "Sala virtual propia con la identidad visual de tu consultorio",
        "Toma notas clínicas en paralelo en la misma pantalla durante la videollamada",
        "Cifrado WebRTC de punto a punto que garantiza confidencialidad absoluta",
        "Temporizador de sesión discreto con aviso suave a los 45 y 50 minutos"
      ],
      tag: "Sala Virtual HD",
      patientName: "Videoconsulta en Progreso",
      patientAge: "Conexión Cifrada WebRTC",
      dx: "Paciente conectado desde Monterrey, N.L.",
      stat: "100%",
      statDesc: "Cifrado punto a punto"
    },
    {
      id: "cobros",
      title: "Cobros en Línea",
      icon: DollarSign,
      badge: "Finanzas Claras & SAT CFDI 4.0",
      headline: "Cobra sesiones por transferencia SPEI, tarjeta o efectivo sin fricción",
      description:
        "Mantén una relación terapéutica sana sin la incomodidad de cobrar al inicio o final de la sesión. Envía links de cobro seguros, registra pagos en efectivo o transferencia y emite recibos de honorarios profesionales listos para deducir de impuestos.",
      bullets: [
        "Links de pago con tarjeta de crédito, débito y transferencias directas SPEI",
        "Control de adeudos, sesiones prepagadas y paquetes terapéuticos",
        "Reportes mensuales de ingresos netos por terapeuta o por clínica",
        "Generación automática de recibos médicos para deducción fiscal de pacientes"
      ],
      tag: "Pasarela Segura Stripe & SPEI",
      patientName: "Recibo de Honorarios #1042",
      patientAge: "Honorarios de Psicoterapia Individual",
      dx: "Pagado con Tarjeta · $1,200.00 MXN",
      stat: "$0",
      statDesc: "Sesiones impagas"
    }
  ];

  // ── Psychologists Testimonials with Real Photos ──
  const testimonials = [
    {
      name: "Lic. Sofía Morales Garza",
      role: "Psicoterapeuta Cognitivo-Conductual",
      city: "Ciudad de México",
      cedula: "Céd. Prof. 8492011",
      photo: "https://images.unsplash.com/photo-1594824813624-9f874983226a?auto=format&fit=crop&w=400&q=80",
      quote:
        "Antes perdía hasta dos horas todos los domingos mandando mensajes manuales para confirmar las citas de la semana. Con los recordatorios automáticos por WhatsApp de Saudade, mis pacientes confirman en un clic y las inasistencias bajaron más del 70%. Recuperé mis fines de semana.",
      highlight: "Reducción del 70% en inasistencias"
    },
    {
      name: "Mtro. Alejandro Garza Leal",
      role: "Psicólogo Clínico & Terapeuta Familiar",
      city: "Monterrey, N.L.",
      cedula: "Céd. Prof. 7193820",
      photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
      quote:
        "El soporte para escribir a mano en el iPad con Apple Pencil es insuperable. Me permite tomar notas y esquemas en plena sesión sin tener una laptop fría frente al paciente. Al terminar, la IA me ayuda a estructurar mi nota SOAP en 30 segundos.",
      highlight: "Notas SOAP con IA y Apple Pencil"
    },
    {
      name: "Dra. Elena Rincón Orozco",
      role: "Directora de Centro Psicológico Integra",
      city: "Guadalajara, Jal.",
      cedula: "Céd. Prof. 6204918",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
      quote:
        "Gestionar 8 terapeutas era un caos de calendarios duplicados y hojas de cálculo. Con Saudade cada psicólogo tiene su acceso privado para sus pacientes, la administración coordina salas y los consentimientos informados quedan archivados bajo la NOM-024.",
      highlight: "Clínica de 8 psicólogos coordinada"
    },
    {
      name: "Dr. Fernando Lozano Vega",
      role: "Especialista en Neuropsicología Clínica",
      city: "Puebla, Pue.",
      cedula: "Céd. Prof. 9182374",
      photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
      quote:
        "La tranquilidad legal es invaluable. Saber que ante cualquier requerimiento de COFEPRIS o auditoría médica mis notas, pruebas psicométricas y consentimientos tienen sello de tiempo inmutable y cifrado bancario me da una paz mental absoluta.",
      highlight: "Cumplimiento legal y COFEPRIS"
    },
    {
      name: "Mtra. Claudia Domínguez Solís",
      role: "Sexología Clínica y Terapia de Pareja",
      city: "Querétaro, Qro.",
      cedula: "Céd. Prof. 5820194",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      quote:
        "La videoconsulta cifrada directamente en el navegador resolvió todos los problemas de pacientes que batallaban con Zoom o enlaces caídos. Mis pacientes de terapia de pareja entran a la sala segura desde su celular sin fricción.",
      highlight: "Videoconsulta directa y segura"
    },
    {
      name: "Mtro. Javier Peña Valladares",
      role: "Psicólogo Infantil y del Desarrollo",
      city: "Mérida, Yuc.",
      cedula: "Céd. Prof. 4392810",
      photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80",
      quote:
        "Poder enviar links de cobro automático por WhatsApp para las sesiones y emitir recibos médicos listos para el SAT profesionalizó al 100% la administración de mi consultorio con los padres de familia.",
      highlight: "Cobros profesionales y SAT"
    }
  ];

  // ── Pricing Tiers ──
  const pricingPlans = [
    {
      name: "Plan Inicial",
      desc: "Ideal para psicólogos que inician su consulta privada o atienden hasta 20 pacientes activos.",
      monthlyPrice: 399,
      annualPrice: 319,
      badge: "Para iniciar",
      popular: false,
      features: [
        "Hasta 25 expedientes de pacientes activos",
        "Agenda clínica y calendario personal",
        "Recordatorios por WhatsApp automáticos (50/mes)",
        "Notas clínicas con formato SOAP y plantillas",
        "Consentimientos informados digitales",
        "Cumplimiento legal NOM-024 y NOM-004",
        "Soporte por correo y WhatsApp"
      ],
      ctaText: "Comenzar gratis 14 días",
      ctaHref: "https://app.saudade.mx/auth"
    },
    {
      name: "Especialista Pro",
      desc: "El plan más elegido por terapeutas consolidados que buscan máxima automatización y ahorro de tiempo.",
      monthlyPrice: 699,
      annualPrice: 559,
      badge: "Más Popular",
      popular: true,
      features: [
        "Expedientes de pacientes ILIMITADOS",
        "Recordatorios de WhatsApp ILIMITADOS",
        "Asistente IA para notas clínicas estructuradas",
        "Lienzo táctil para iPad con Apple Pencil",
        "Consultorio virtual HD con videollamadas cifradas",
        "Cobros en línea (SPEI, Tarjetas) y recibos SAT",
        "Portal de auto-agendamiento para pacientes",
        "Soporte prioritario 7 días a la semana"
      ],
      ctaText: "Comenzar gratis 14 días",
      ctaHref: "https://app.saudade.mx/auth"
    },
    {
      name: "Centros y Clínicas",
      desc: "Para consultorios grupales, clínicas multidisciplinarias e institutos de salud mental.",
      monthlyPrice: 1499,
      annualPrice: 1199,
      badge: "Multiusuario",
      popular: false,
      features: [
        "Incluye 3 profesionales (terapeutas adicionales disponibles)",
        "Gestión multi-agenda con asignación de consultorios físicos",
        "Control estricto de privacidad y roles por terapeuta",
        "Cálculo automático de comisiones y honorarios de equipo",
        "Bitácora centralizada de auditoría sanitaria NOM-024",
        "Capacitación personalizada para todo tu equipo",
        "Migración gratuita de expedientes desde Excel u otro software",
        "Gerente de cuenta dedicado"
      ],
      ctaText: "Solicitar Demo de Clínica",
      ctaHref: "https://wa.me/5216674738520?text=Hola,%20quisiera%20informaci%C3%B3n%20sobre%20el%20Plan%20Cl%C3%ADnicas%20de%20Saudade"
    }
  ];

  // ── FAQ Items ──
  const faqs = [
    {
      q: "¿Saudade cumple con las normas oficiales NOM-024 y NOM-004 de México?",
      a: "Sí, al 100%. Saudade fue diseñado específicamente bajo el marco legal de la Secretaría de Salud y COFEPRIS. Todos los registros cumplen con la NOM-004-SSA3-2012 (estructura de expediente clínico, consentimientos y notas de evolución) y la NOM-024-SSA3-2012 (sistemas de información electrónica en salud, inmutabilidad de bitácora y cifrado de datos personales sensibles)."
    },
    {
      q: "¿Cómo funcionan los recordatorios automáticos por WhatsApp?",
      a: "Utilizamos la API oficial de WhatsApp Business en la nube de Meta. Esto garantiza que tus mensajes se entreguen siempre con 99.9% de confiabilidad sin riesgo de que tu número personal sea bloqueado ni dependas de dejar tu computadora o teléfono encendido. Los mensajes incluyen botones interactivos para que el paciente confirme su asistencia con un solo toque."
    },
    {
      q: "¿Puedo migrar mis pacientes existentes desde Excel u otro sistema?",
      a: "Sí. Contamos con un importador inteligente de hojas de cálculo de Excel y archivos CSV. Solo subes tu lista con nombres, teléfonos y correos y el sistema crea automáticamente los expedientes en segundos. Además, si contratas el Plan Pro o Clínica, nuestro equipo te asiste en la migración sin costo adicional."
    },
    {
      q: "¿Puedo usar mi iPad con Apple Pencil para escribir notas a mano?",
      a: "Sí, es una de las funciones más apreciadas por los psicólogos. Saudade incluye un lienzo digital de alta precisión con cuadrícula, renglones, bolígrafo clínico, resaltador y borrador. Puedes escribir o dibujar diagramas durante la sesión con tu Apple Pencil y todo queda guardado y exportable en PDF dentro del expediente del paciente."
    },
    {
      q: "¿Necesito tarjeta de crédito para iniciar la prueba gratuita?",
      a: "No. Puedes crear tu cuenta en 30 segundos usando únicamente tu correo electrónico o tu cuenta de Google. Tienes 14 días completos para probar todas las funciones profesionales sin costo ni compromiso alguno."
    },
    {
      q: "¿Cómo protege Saudade la confidencialidad de mis pacientes?",
      a: "La información médica se cifra con tecnología AES-256 bits de extremo a extremo, tanto en tránsito como en reposo en servidores de grado médico con respaldos diarios automáticos. Ni siquiera nuestro personal técnico puede acceder a tus notas clínicas ni a los datos confidenciales de tus pacientes."
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-800 font-sans selection:bg-emerald-500/20 selection:text-emerald-900">
      
      {/* ── Top Announcement Banner ────────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-violet-900 via-slate-900 to-emerald-950 text-white text-xs py-2.5 px-4 text-center font-medium border-b border-white/10 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
            NUEVO
          </span>
          <span>
            ✨ <strong>Prueba Saudade 14 días gratis</strong> — Automatiza tu consulta, reduce faltas por WhatsApp y cumple con la NOM-024.
          </span>
          <a
            href="https://app.saudade.mx/auth"
            className="inline-flex items-center gap-1 font-bold text-emerald-400 hover:text-emerald-300 underline ml-1"
          >
            Comenzar ahora <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* ── Header / Navigation Glassmorphic ───────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#faf9f6]/90 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center group py-1">
            <img
              src="/saudade_brand.svg"
              alt="Saudade Gestión Clínica"
              className="h-9 sm:h-10 w-auto object-contain select-none transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#funciones" className="hover:text-slate-900 transition-colors">
              Funcionalidades
            </a>
            <a href="#clinicas" className="hover:text-slate-900 transition-colors">
              Para Clínicas
            </a>
            <a href="#seguridad" className="hover:text-slate-900 transition-colors">
              Seguridad & NOM-024
            </a>
            <a href="#testimonios" className="hover:text-slate-900 transition-colors">
              Opiniones
            </a>
            <a href="#precios" className="hover:text-slate-900 transition-colors">
              Planes y Precios
            </a>
            <a href="#faq" className="hover:text-slate-900 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://app.saudade.mx/auth"
              className="px-4 py-2.5 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors rounded-xl"
            >
              Iniciar sesión
            </a>
            <a
              href="https://app.saudade.mx/auth"
              className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] flex items-center gap-2"
            >
              <span>Prueba gratis</span>
              <ArrowRight className="h-3.5 w-3.5 text-emerald-400" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-4">
            <a
              href="#funciones"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-800"
            >
              Funcionalidades
            </a>
            <a
              href="#clinicas"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-800"
            >
              Para Clínicas
            </a>
            <a
              href="#seguridad"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-800"
            >
              Seguridad & NOM-024
            </a>
            <a
              href="#testimonios"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-800"
            >
              Opiniones de Psicólogos
            </a>
            <a
              href="#precios"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-800"
            >
              Planes y Precios
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-800"
            >
              FAQ
            </a>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="https://app.saudade.mx/auth"
                className="w-full py-3 text-center text-sm font-bold text-slate-800 bg-slate-100 rounded-xl"
              >
                Iniciar sesión
              </a>
              <a
                href="https://app.saudade.mx/auth"
                className="w-full py-3 text-center text-sm font-bold text-white bg-slate-900 rounded-xl shadow-md"
              >
                Comenzar prueba gratis de 14 días
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-xs font-semibold mb-6 shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span>El software de gestión clínica preferido en México y LATAM</span>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 font-display max-w-5xl mx-auto leading-[1.1] mb-6">
            La plataforma clínica integral para{" "}
            <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-violet-800 bg-clip-text text-transparent">
              psicólogos y centros de psicología
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
            Ahorra hasta 8 horas a la semana. Expedientes protegidos por la NOM-024, notas clínicas estructuradas con Inteligencia Artificial, lienzo para iPad con Apple Pencil, recordatorios por WhatsApp y cobros en un solo lugar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8">
            <a
              href="https://app.saudade.mx/auth"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-xl shadow-slate-900/20 hover:scale-[1.02] transition-all duration-200"
            >
              Comenzar prueba gratis de 14 días
              <ArrowRight className="h-4 w-4 text-emerald-400" />
            </a>
            <a
              href="https://wa.me/5216674738520?text=Hola,%20quisiera%20agendar%20una%20demostraci%C3%B3n%20personalizada%20de%20Saudade"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300/80 shadow-xs transition-colors"
            >
              <MessageSquare className="h-4 w-4 text-emerald-600" />
              Agendar Demo por WhatsApp
            </a>
          </div>

          {/* Bullet proofs */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium mb-16">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Sin tarjeta de crédito
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Listo en 2 minutos
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Cancela cuando quieras
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-amber-500 fill-amber-500" /> 4.9/5 estrellas de psicólogos
            </span>
          </div>

          {/* ── App Visual Mockup Preview with Floating Chips ───────────────── */}
          <div className="relative max-w-5xl mx-auto">
            
            {/* Top-Right Floating WhatsApp Notification Chip */}
            <div className="hidden sm:flex absolute -top-6 -right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-emerald-200/90 shadow-2xl shadow-emerald-950/15 items-center gap-3 z-30 animate-float-chip text-left">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-900">Recordatorio WhatsApp</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded-full">Enviado</span>
                </div>
                <p className="text-[11px] text-slate-600 font-medium">Paciente confirmó asistencia · 4:00 PM ✓</p>
              </div>
            </div>

            {/* Bottom-Left Floating NOM-024 Shield Chip */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-violet-200/90 shadow-2xl shadow-violet-950/15 items-center gap-3 z-30 animate-float-chip-alt text-left">
              <div className="h-10 w-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-700 shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-900">Expediente Clínico</span>
                  <span className="text-[10px] bg-violet-100 text-violet-800 font-bold px-1.5 py-0.5 rounded-full">NOM-024</span>
                </div>
                <p className="text-[11px] text-slate-600 font-medium">Cifrado AES-256 · Firma Digital Activa</p>
              </div>
            </div>

            {/* Main Window Frame */}
            <div className="rounded-3xl border border-slate-300/80 bg-white p-2.5 sm:p-4 shadow-2xl shadow-slate-900/10">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden text-left">
                
                {/* Window Bar */}
                <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-rose-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs font-semibold text-slate-600">
                      app.saudade.mx — Consultorio Clínico
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-md">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    NOM-024 Verificado · Conexión Segura
                  </div>
                </div>

                {/* Mockup Dashboard Content Grid */}
                <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white">
                  
                  {/* Left Column: Patient Dossier & Note with AI */}
                  <div className="lg:col-span-7 space-y-4">
                    {/* Patient Card */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <img
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                            alt="Paciente"
                            className="h-10 w-10 rounded-full object-cover ring-2 ring-emerald-500/20"
                          />
                          <div>
                            <h4 className="font-bold text-sm text-slate-900">Mariana Vega Morales</h4>
                            <p className="text-xs text-slate-500">Expediente #MC-104 · 28 años · Psicoterapia Individual</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                          Legal Completo
                        </span>
                      </div>

                      <div className="text-xs bg-white p-3 rounded-xl border border-slate-200/80 space-y-1.5">
                        <p className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                          <FileSignature className="h-3 w-3 text-emerald-600" /> Consentimiento Informado Firmado Digitalmente
                        </p>
                        <p className="text-[11px] text-slate-500">
                          Diagnóstico CIE-10: <strong>F41.1 Trastorno de ansiedad generalizada</strong>
                        </p>
                      </div>
                    </div>

                    {/* Note with AI Assistant */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-50/60 to-emerald-50/40 border border-violet-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-violet-900 flex items-center gap-1.5">
                          <Sparkles className="h-3.5 w-3.5 text-violet-600" /> Nota de Sesión #5 (Generada con Asistente IA)
                        </span>
                        <span className="text-[10px] text-slate-400">Hace 15 min</span>
                      </div>
                      <div className="space-y-1.5 text-xs text-slate-700 bg-white/90 p-3 rounded-xl border border-violet-100">
                        <p><strong>Subjetivo (S):</strong> Paciente reporta mejoría en higiene del sueño tras aplicar bitácora.</p>
                        <p><strong>Objetivo (O):</strong> Afecto congruente, discurso fluido, reducción del nivel de rumiación.</p>
                        <p><strong>Plan (P):</strong> Continuar con registro de pensamientos automáticos y técnica 5-4-3-2-1.</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Upcoming Agenda & iPad Canvas */}
                  <div className="lg:col-span-5 space-y-4">
                    {/* WhatsApp Reminder status */}
                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="h-4 w-4 text-emerald-700" />
                        <span className="text-xs font-bold text-emerald-900">Recordatorio Automático por WhatsApp</span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-emerald-100 space-y-1.5 text-xs text-slate-700">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-semibold text-slate-900">Carlos Domínguez</span>
                          <span className="text-emerald-700 font-bold">11:00 AM Hoy</span>
                        </div>
                        <p className="text-[11px] text-slate-500">
                          "Hola Carlos, te recordamos tu cita de terapia hoy..."
                        </p>
                        <div className="flex items-center gap-1 text-[10px] text-emerald-800 font-bold pt-1">
                          <Check className="h-3 w-3 text-emerald-600" /> El paciente respondió: "Sí, confirmada"
                        </div>
                      </div>
                    </div>

                    {/* iPad Handwriting Note preview */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                          <Tablet className="h-3.5 w-3.5 text-slate-600" /> Lienzo Manuscrito para iPad
                        </span>
                        <span className="text-[10px] font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded-md">
                          Apple Pencil
                        </span>
                      </div>
                      <div className="h-20 bg-white rounded-xl border border-slate-200 flex items-center justify-center p-3 relative overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px]">
                        <span className="text-xs font-medium text-slate-400 italic">
                          Esquema cognitivo dibujado a mano libre · Alta resolución
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── Infinite Marquee 1: Alliances, Standards & Social Proof ──────── */}
      <section className="py-10 bg-white border-y border-slate-200/70 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Alineado a los estándares de salud mental y seguridad más rigurosos
          </p>
        </div>

        {/* Marquee Container with fade edges */}
        <div className="marquee-container">
          <div className="marquee-track">
            {/* Set 1 */}
            {alliances.map((item, idx) => (
              <div
                key={`all-1-${idx}`}
                className="flex items-center gap-3 px-6 py-3 mx-3 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs shrink-0"
              >
                <div className="h-8 w-8 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    {item.badge}
                  </span>
                  <span className="block text-xs font-bold text-slate-900 whitespace-nowrap">
                    {item.title} — {item.sub}
                  </span>
                </div>
              </div>
            ))}

            {/* Set 2 (Duplicate for smooth infinite seamless loop) */}
            {alliances.map((item, idx) => (
              <div
                key={`all-2-${idx}`}
                className="flex items-center gap-3 px-6 py-3 mx-3 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs shrink-0"
              >
                <div className="h-8 w-8 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    {item.badge}
                  </span>
                  <span className="block text-xs font-bold text-slate-900 whitespace-nowrap">
                    {item.title} — {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interactive Feature Showcase (5 Tabs) ────────────────────────── */}
      <section id="funciones" className="py-20 md:py-28 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 mb-3 inline-block">
              Todo en un solo lugar
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              Cada detalle de tu consulta, simplificado
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Diseñado mano a mano con psicólogos clínicos en México para eliminar la fricción técnica y administrativa.
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {featureTabs.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white shadow-lg shadow-slate-900/15"
                      : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-emerald-400" : "text-slate-500"}`} />
                  {tab.title}
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Display Card */}
          {featureTabs[activeTab] && (
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Descriptions and Bullets */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {featureTabs[activeTab].badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mt-3 mb-4">
                    {featureTabs[activeTab].headline}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {featureTabs[activeTab].description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {featureTabs[activeTab].bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 font-medium">{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <a
                    href="https://app.saudade.mx/auth"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all"
                  >
                    Probar esta función gratis <ArrowRight className="h-4 w-4 text-emerald-400" />
                  </a>
                </div>
              </div>

              {/* Right Column: Realistic UI Mockup Showcase */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 relative overflow-hidden shadow-inner">
                  
                  {/* Decorative badge floating */}
                  <div className="absolute top-4 right-4 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 text-right shadow-xs">
                    <span className="block text-sm font-black text-emerald-700">
                      {featureTabs[activeTab].stat}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {featureTabs[activeTab].statDesc}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    {featureTabs[activeTab].tag}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                    {featureTabs[activeTab].patientName}
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">
                    {featureTabs[activeTab].patientAge}
                  </p>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="h-2 w-16 bg-emerald-200 rounded-full" />
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      {featureTabs[activeTab].dx}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Lock className="h-3.5 w-3.5 text-emerald-600" /> Cifrado de 256 bits activo
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700">
                      Saudade Cloud v2.0
                    </span>
                  </div>

                </div>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* ── Solo vs Clinic Comparison with Professional Photos ───────────── */}
      <section id="clinicas" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              Una solución adaptada a tu escala de trabajo
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Ya sea que tengas tu consultorio privado individual o dirijas una clínica con decenas de especialistas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Solo Psychologist Card with Photo */}
            <div className="rounded-3xl border border-slate-200 bg-[#faf9f6] p-8 shadow-sm flex flex-col justify-between overflow-hidden relative">
              <div className="space-y-6">
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
                    alt="Psicólogo en consulta privada"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">Consulta Privada</span>
                    <h4 className="text-lg font-bold">Psicólogos Independientes</h4>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Para el Terapeuta Independiente</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    La tranquilidad de concentrarte en tus pacientes sin desgastarte en cobranzas, mensajes de confirmación ni papeleo legal.
                  </p>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" /> Agenda unificada y portal propio de citas
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" /> WhatsApp automatizado para confirmaciones
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" /> Notas con IA y expediente NOM-024
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" /> Cobros directos a tu cuenta bancaria
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <a
                  href="https://app.saudade.mx/auth"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 shadow-xs transition-colors"
                >
                  Comenzar como independiente
                </a>
              </div>
            </div>

            {/* Clinics and Centers Card with Photo */}
            <div className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50/40 via-white to-slate-50 p-8 shadow-sm flex flex-col justify-between overflow-hidden relative">
              <div className="space-y-6">
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                    alt="Equipo clínico multidisciplinario"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-violet-300">Equipos & Clínicas</span>
                    <h4 className="text-lg font-bold">Centros de Salud Mental</h4>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Para Centros y Clínicas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Todo tu equipo de terapeutas, coordinadores y recepción bajo una misma plataforma ordenada con permisos estrictos.
                  </p>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-violet-600 shrink-0" /> Gestión multi-terapeuta y salas compartidas
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-violet-600 shrink-0" /> Privacidad por roles (cada psicólogo ve solo sus pacientes)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-violet-600 shrink-0" /> Liquidación automática de comisiones y honorarios
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-violet-600 shrink-0" /> Bitácora global de auditoría sanitaria NOM-024
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <a
                  href="https://app.saudade.mx/auth"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-colors"
                >
                  Crear cuenta para clínica
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── Security & Trust ("Tus pacientes te confían lo más íntimo") ──── */}
      <section id="seguridad" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-400/20">
              Privacidad Médica de Grado Bancario
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
              Tus pacientes te confían lo más íntimo de su vida.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              En Saudade sabemos que los datos de salud mental son sagrados. Por eso construimos la plataforma con los estándares más rigurosos de protección de datos de la industria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">NOM-024-SSA3-2012</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cumplimiento con los lineamientos oficiales de la Secretaría de Salud para Sistemas de Información de Registro Electrónico para la Salud y expediente clínico NOM-004.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Cifrado de Extremo a Extremo</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Toda la información se cifra en reposo y en tránsito con algoritmos AES-256. Ni siquiera nuestro personal técnico puede leer tus notas clínicas ni expedientes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Respaldos Diarios Inmutables</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Copias de seguridad automáticas en la nube protegidas contra ransomware. Garantía de retención legal mínima de 5 años conforme a la legislación mexicana.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── Testimonials Section with Infinite Marquee & Real Photos ──────── */}
      <section id="testimonios" className="py-20 md:py-28 bg-[#faf9f6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 mb-3 inline-block">
              Opiniones Reales
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              Lo que opinan los psicólogos sobre Saudade
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Cientos de profesionales en México y Latinoamérica ya gestionan su consulta con nuestra plataforma.
            </p>
          </div>

          {/* Featured Psychologist Spotlight Review */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xl mb-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-center md:text-left flex flex-col items-center md:items-start">
              <img
                src={testimonials[0].photo}
                alt={testimonials[0].name}
                className="h-28 w-28 rounded-2xl object-cover shadow-lg ring-4 ring-emerald-500/10 mb-4"
              />
              <h3 className="font-extrabold text-base text-slate-900">{testimonials[0].name}</h3>
              <p className="text-xs text-slate-500">{testimonials[0].role}</p>
              <p className="text-[11px] font-semibold text-emerald-700 mt-1">{testimonials[0].city} · {testimonials[0].cedula}</p>
              <div className="flex text-amber-400 gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
                {testimonials[0].highlight}
              </span>
              <p className="text-base sm:text-lg text-slate-700 italic leading-relaxed font-normal">
                "{testimonials[0].quote}"
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Psicóloga verificada con Cédula Profesional en México
              </div>
            </div>
          </div>

        </div>

        {/* ── Testimonials Infinite Marquee Carousel ──────────────────────── */}
        <div className="marquee-container">
          <div className="marquee-track">
            {/* Set 1 */}
            {testimonials.map((t, idx) => (
              <div
                key={`test-1-${idx}`}
                className="w-80 sm:w-96 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between mx-4 shrink-0 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Verificado
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed line-clamp-4">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-emerald-500/20 shrink-0"
                  />
                  <div className="overflow-hidden">
                    <h4 className="text-xs font-bold text-slate-900 truncate">{t.name}</h4>
                    <p className="text-[11px] text-slate-500 truncate">{t.role}</p>
                    <p className="text-[10px] text-slate-400">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Set 2 (Duplicate for smooth infinite seamless loop) */}
            {testimonials.map((t, idx) => (
              <div
                key={`test-2-${idx}`}
                className="w-80 sm:w-96 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between mx-4 shrink-0 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Verificado
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed line-clamp-4">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-emerald-500/20 shrink-0"
                  />
                  <div className="overflow-hidden">
                    <h4 className="text-xs font-bold text-slate-900 truncate">{t.name}</h4>
                    <p className="text-[11px] text-slate-500 truncate">{t.role}</p>
                    <p className="text-[10px] text-slate-400">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── Pricing Section ──────────────────────────────────────────────── */}
      <section id="precios" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 mb-3 inline-block">
              Precios Transparentes
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              Planes claros diseñados para crecer con tu consulta
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-8 font-normal">
              Comienza hoy con 14 días de prueba gratis. Sin contratos forzosos ni comisiones ocultas.
            </p>

            {/* Monthly / Annual Toggle */}
            <div className="inline-flex items-center gap-3 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  !isAnnual ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Pago Mensual
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isAnnual ? "bg-slate-900 text-white shadow-xs" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <span>Pago Anual</span>
                <span className="bg-emerald-400 text-slate-900 text-[10px] font-black px-1.5 py-0.5 rounded-md uppercase">
                  2 Meses Gratis
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, idx) => {
              const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
              return (
                <div
                  key={idx}
                  className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    plan.popular
                      ? "bg-slate-900 text-white shadow-2xl shadow-slate-900/20 ring-2 ring-emerald-500 scale-100 lg:-translate-y-2"
                      : "bg-[#faf9f6] text-slate-800 border border-slate-200 shadow-sm hover:shadow-md"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-900 text-[11px] font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Recomendado por Psicólogos
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-block mb-2 ${
                          plan.popular
                            ? "bg-emerald-500/20 text-emerald-300"
                            : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {plan.badge}
                      </span>
                      <h3
                        className={`text-2xl font-extrabold font-display ${
                          plan.popular ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className={`text-xs mt-2 leading-relaxed ${
                          plan.popular ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        {plan.desc}
                      </p>
                    </div>

                    <div className="pt-2 pb-4 border-y border-current/10">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl sm:text-5xl font-black font-display tracking-tight">
                          ${currentPrice}
                        </span>
                        <span
                          className={`text-xs font-semibold ${
                            plan.popular ? "text-slate-400" : "text-slate-500"
                          }`}
                        >
                          MXN / mes
                        </span>
                      </div>
                      <p
                        className={`text-[11px] mt-1 ${
                          plan.popular ? "text-emerald-400" : "text-emerald-700"
                        }`}
                      >
                        {isAnnual
                          ? `Facturado anualmente ($${currentPrice * 12} MXN/año)`
                          : "Facturación mensual recurrente"}
                      </p>
                    </div>

                    <ul className="space-y-3 text-xs">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check
                            className={`h-4 w-4 shrink-0 mt-0.5 ${
                              plan.popular ? "text-emerald-400" : "text-emerald-600"
                            }`}
                          />
                          <span
                            className={plan.popular ? "text-slate-200" : "text-slate-700"}
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <a
                      href={plan.ctaHref}
                      className={`w-full py-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        plan.popular
                          ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg hover:shadow-xl"
                          : "bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
                      }`}
                    >
                      {plan.ctaText}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── FAQ Accordion Section ────────────────────────────────────────── */}
      <section id="faq" className="py-20 md:py-28 bg-[#faf9f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 mb-3 inline-block">
              Resolvemos tus Dudas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
              Preguntas Frecuentes
            </h2>
            <p className="text-sm text-slate-600">
              Todo lo que necesitas saber antes de dar el paso hacia la gestión clínica profesional.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-xs text-slate-500 mb-3">¿Tienes una pregunta específica sobre tu consultorio?</p>
            <a
              href="https://wa.me/5216674738520?text=Hola,%20tengo%20una%20duda%20sobre%20Saudade"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 underline"
            >
              <MessageSquare className="h-4 w-4" /> Hablar directamente con nuestro equipo por WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* ── Final Conversion CTA Banner ──────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
            <span>✨ 14 Días de Prueba Gratuita sin Compromiso</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight max-w-3xl mx-auto leading-tight">
            Comienza a transformar la gestión de tu consulta hoy mismo
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Únete a los cientos de psicólogos en México que ya recuperaron su paz mental, redujeron sus inasistencias y blindaron legalmente sus expedientes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://app.saudade.mx/auth"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-xl shadow-emerald-500/20 hover:scale-105 transition-all"
            >
              Comenzar prueba gratis de 14 días
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/5216674738520?text=Hola,%20quisiera%20agendar%20una%20demostraci%C3%B3n%20personalizada%20de%20Saudade"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              <MessageSquare className="h-5 w-5 text-emerald-400" />
              Solicitar Demo Guiada
            </a>
          </div>

          <p className="text-xs text-slate-400 pt-4">
            Sin tarjeta de crédito · Configuración guiada en 2 minutos · Cancela en cualquier momento
          </p>

        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            
            {/* Brand Col */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center">
                <img
                  src="/saudade_brand_white.svg"
                  alt="Saudade"
                  className="h-9 sm:h-10 w-auto object-contain select-none"
                />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Plataforma SaaS integral de gestión clínica diseñada específicamente para psicólogos, terapeutas y centros de salud mental en México y Latinoamérica.
              </p>
              <div className="text-xs text-slate-500 space-y-1">
                <p>Cumplimiento oficial: <strong>NOM-024-SSA3-2012</strong> & <strong>NOM-004-SSA3-2012</strong></p>
                <p>Cifrado de grado médico: <strong>AES-256 bits</strong></p>
              </div>
            </div>

            {/* Links Col 1: Plataforma */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Plataforma</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#funciones" className="hover:text-white transition-colors">Expediente NOM-024</a></li>
                <li><a href="#funciones" className="hover:text-white transition-colors">Agenda & WhatsApp</a></li>
                <li><a href="#funciones" className="hover:text-white transition-colors">Notas con IA</a></li>
                <li><a href="#funciones" className="hover:text-white transition-colors">Lienzo iPad</a></li>
                <li><a href="#funciones" className="hover:text-white transition-colors">Consultorio Virtual</a></li>
                <li><a href="#funciones" className="hover:text-white transition-colors">Cobros en Línea</a></li>
              </ul>
            </div>

            {/* Links Col 2: Soluciones */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Soluciones</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#clinicas" className="hover:text-white transition-colors">Para Psicólogos Solos</a></li>
                <li><a href="#clinicas" className="hover:text-white transition-colors">Para Centros y Clínicas</a></li>
                <li><a href="#seguridad" className="hover:text-white transition-colors">Seguridad y Cifrado</a></li>
                <li><a href="#precios" className="hover:text-white transition-colors">Planes y Precios</a></li>
                <li><a href="https://app.saudade.mx/auth" className="hover:text-white transition-colors">Acceso Clientes</a></li>
              </ul>
            </div>

            {/* Links Col 3: Contacto y Soporte */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contacto & Soporte</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                ¿Deseas una demostración para tu clínica o equipo?
              </p>
              <a
                href="https://wa.me/5216674738520?text=Hola,%20quisiera%20soporte%20o%20demo%20de%20Saudade"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold hover:bg-emerald-500/20 transition-colors"
              >
                <MessageSquare className="h-4 w-4" /> Atención por WhatsApp
              </a>
              <p className="text-[11px] text-slate-500 pt-2">
                Horario de atención médica: Lun - Vie 9:00 a 19:00 hrs (Hora CDMX)
              </p>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} Saudade Health Technologies. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-slate-400 transition-colors">Términos de Servicio</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Aviso de Privacidad</a>
              <a href="#seguridad" className="hover:text-slate-400 transition-colors">Seguridad NOM-024</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
