import React, { useState, useEffect } from "react";
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
  ChevronRight,
  Star,
  DollarSign,
  Smartphone,
  Tablet,
  Laptop,
  Building2,
  Check,
  HelpCircle,
  ExternalLink,
  Bot,
  PenTool,
  Video,
  FileSignature
} from "lucide-react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const featureTabs = [
    {
      id: "expediente",
      title: "Expediente Clínico Digital",
      badge: "Cumplimiento NOM-024",
      icon: FileText,
      headline: "Los datos de tus pacientes organizados, seguros y a un clic",
      description:
        "Olvida los archiveros físicos y las libretas dispersas. Mantén el historial completo de cada paciente: motivo de consulta, antecedentes patológicos y familiares, diagnóstico CIE-10, consentimientos firmados digitalmente y estudios adjuntos en PDF.",
      bullets: [
        "Apego estricto a las normas NOM-024-SSA3-2012 y NOM-004-SSA3-2012",
        "Búsqueda instantánea de pacientes por nombre, correo o teléfono",
        "Consentimientos informados con firma digital legal y validez probatoria",
        "Subida segura de documentos, pruebas psicológicas y estudios en PDF"
      ],
      mockupTag: "Expediente del Paciente",
      mockupTitle: "Lic. Mariana Soto Valladares",
      mockupSub: "Expediente #MC-2026-089 · Adulto · Terapia Individual",
      mockupDetail: "Diagnóstico CIE-10: F41.1 Trastorno de ansiedad generalizada",
      stat: "100% Digital",
      statDesc: "Sin carpetas de papel"
    },
    {
      id: "agenda",
      title: "Agenda & WhatsApp Automático",
      badge: "-75% Inasistencias",
      icon: Calendar,
      headline: "Sesiones organizadas y recordatorios que tus pacientes sí responden",
      description:
        "Tu tiempo es valioso. Saudade envía recordatorios automáticos por WhatsApp 24 horas antes de cada consulta con un botón interactivo para que tus pacientes confirmen su asistencia en un clic.",
      bullets: [
        "Envío automático por WhatsApp sin que tengas que mandar mensajes manuales",
        "Confirmación de asistencia instantánea reflejada en tu calendario en tiempo real",
        "Bloqueo de eventos personales (supervisión clínica, comidas, descanso o congresos)",
        "Sincronización bidireccional con Google Calendar y Outlook"
      ],
      mockupTag: "Agenda Semanal Inteligente",
      mockupTitle: "Miércoles, 10:00 AM — Presencial (Consultorio 3)",
      mockupSub: "Paciente: Carlos Domínguez · Terapia de Pareja",
      mockupDetail: "WhatsApp: ✅ Cita confirmada por el paciente automáticamente",
      stat: "8 hrs/sem",
      statDesc: "Ahorradas en mensajes"
    },
    {
      id: "notas",
      title: "Notas con IA & Modo iPad",
      badge: "Innovación Exclusiva",
      icon: Brain,
      headline: "Redacta notas de sesión en segundos o escribe a mano alzada",
      description:
        "Elige cómo prefieres documentar tus sesiones: usa nuestro Escriba de Inteligencia Artificial para redactar notas SOAP estructuradas con tu voz, o utiliza tu iPad con Apple Pencil en nuestro lienzo de notas manuscritas con cuadrícula.",
      bullets: [
        "Escriba con Inteligencia Artificial que estructura tus notas SOAP en 30 segundos",
        "Lienzo para iPad y Tablet con lápiz táctil, cuadrícula, renglones y resaltador",
        "Dictado por voz con detección precisa de términos psicológicos y clínicos",
        "Sello de integridad criptográfica SHA-256 para prevenir alteraciones"
      ],
      mockupTag: "Asistente Clínico IA",
      mockupTitle: "Nota de Evolución — Sesión #4 (Modelo SOAP)",
      mockupSub: "Objetivo: Paciente reporta reducción de episodios de pánico semanales",
      mockupDetail: "Plan: Reestructuración cognitiva de pensamientos automáticos y técnica 5-4-3-2-1",
      stat: "30 seg",
      statDesc: "Por nota clínica con IA"
    },
    {
      id: "teleconsulta",
      title: "Consultorio Virtual & Videollamada",
      badge: "Cifrado Extremo a Extremo",
      icon: Video,
      headline: "Atiende pacientes en cualquier ciudad con tu sala segura",
      description:
        "Brinda terapia en línea con total profesionalismo. Tu paciente recibe un enlace de acceso seguro sin necesidad de instalar programas complicados, compatible con sala integrada de Saudade, Google Meet o Zoom.",
      bullets: [
        "Enlace único y seguro por paciente enviado automáticamente en su recordatorio",
        "Pantalla dividida para ver a tu paciente y consultar su expediente simultáneamente",
        "Conexión estable con audio en alta definición protegida con cifrado médico",
        "Compatible con celular, tablet y computadora de escritorio"
      ],
      mockupTag: "Consultorio Virtual Seguro",
      mockupTitle: "Sesión en Curso — Dra. Valenzuela & Paciente",
      mockupSub: "Conexión cifrada de extremo a extremo · Duración: 42 min",
      mockupDetail: "Modo expediente abierto activo: consultando genograma e historial",
      stat: "HD & Seguro",
      statDesc: "Sin descargas extra"
    },
    {
      id: "cobros",
      title: "Cobros en Línea & Finanzas",
      badge: "Control Total",
      icon: DollarSign,
      headline: "Controla tus ingresos, pagos con tarjeta y portal de pacientes",
      description:
        "Lleva el control exacto de tus honorarios. Registra pagos en efectivo o transferencia, o genera enlaces de cobro con tarjeta para sesiones presenciales y virtuales con acreditación inmediata.",
      bullets: [
        "Registro claro de sesiones pagadas, pendientes y saldos a favor",
        "Generación de enlaces de pago seguros con tarjeta (Stripe / Mercado Pago)",
        "Portal del paciente para agendar, pagar y descargar recibos de consulta",
        "Exportación de reportes de ingresos para tu contador en un clic"
      ],
      mockupTag: "Control Financiero",
      mockupTitle: "Balance del Mes: $48,500 MXN",
      mockupSub: "46 consultas atendidas · 94% cobradas a tiempo",
      mockupDetail: "Cobro con tarjeta automático: $1,200 MXN recibido (Stripe)",
      stat: "0%",
      statDesc: "Honorarios olvidados"
    }
  ];

  const faqs = [
    {
      q: "¿Mis expedientes clínicos cumplen con la normativa de salud en México?",
      a: "Sí, absolutamente. Saudade está diseñado en estricto apego a las normas oficiales mexicanas NOM-024-SSA3-2012 (Sistemas de Registro Electrónico para la Salud) y NOM-004-SSA3-2012 (Expediente Clínico). El sistema incorpora bitácora de accesos inmutable, retención legal mínima garantizada de 5 años y almacenamiento cifrado bajo la Ley Federal de Protección de Datos Personales (LFPDPPP)."
    },
    {
      q: "¿Cómo funcionan los recordatorios automáticos por WhatsApp?",
      a: "Saudade se conecta de manera oficial a WhatsApp. Cuando agendas una cita, el sistema envía un mensaje con los detalles al paciente 24 horas antes de su sesión. El paciente cuenta con un botón para confirmar su asistencia ('Sí, asistiré') o avisar si necesita reagendar. En cuanto el paciente confirma, tu calendario se actualiza solo en verde."
    },
    {
      q: "¿Puedo migrar mis pacientes si los tengo en Excel o en otro software?",
      a: "Sí. Contamos con un importador masivo inteligente. Puedes subir tu archivo de Excel o CSV y en menos de 2 minutos todos tus pacientes, teléfonos y correos quedarán cargados en Saudade sin perder ningún dato. Además, nuestro equipo de soporte te asiste sin costo en la migración si lo requieres."
    },
    {
      q: "¿Puedo escribir a mano alzada en mi iPad con Apple Pencil?",
      a: "Sí, es una de las funciones exclusivas más queridas por los psicólogos. Saudade incluye un lienzo táctil de alta resolución con cuadrícula, renglones, bolígrafo clínico, resaltador y borrador. Puedes tomar notas durante la sesión con tu Apple Pencil o stylus como en una libreta de papel, y se guardan sincronizadas y exportables en PDF dentro del expediente del paciente."
    },
    {
      q: "¿Necesito tarjeta de crédito para iniciar la prueba gratuita?",
      a: "No. Puedes crear tu cuenta en 30 segundos usando únicamente tu correo electrónico o tu cuenta de Google. Tienes 14 días completos para probar todas las funciones profesionales sin costo ni compromiso alguno."
    },
    {
      q: "¿Funciona para clínicas o consultorios con varios terapeutas?",
      a: "Totalmente. El Plan Clínica de Saudade permite crear una organización donde el director o administrador puede gestionar múltiples psicólogos, asignar permisos de acceso (para que cada terapeuta solo vea a sus pacientes asignados o el equipo de recepción solo gestione la agenda), coordinar salas físicas y calcular reportes de comisiones automáticamente."
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

      {/* ── Header / Navigation ───────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#faf9f6]/85 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/saudade_icon.png"
              alt="Saudade Logo"
              className="h-10 w-10 rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 font-display">
                saudade
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-700 -mt-1">
                Gestión Clínica
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
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
              Iniciar Sesión
            </a>
            <a
              href="https://app.saudade.mx/auth"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-md shadow-slate-900/15 hover:shadow-lg transition-all duration-200"
            >
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              Probar Gratis 14 Días
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-200/50 transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-6 space-y-4 shadow-xl">
            <div className="flex flex-col gap-3 font-medium text-slate-700">
              <a href="#funciones" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-emerald-700">
                Funcionalidades
              </a>
              <a href="#clinicas" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-emerald-700">
                Para Clínicas
              </a>
              <a href="#seguridad" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-emerald-700">
                Seguridad & NOM-024
              </a>
              <a href="#testimonios" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-emerald-700">
                Opiniones de Psicólogos
              </a>
              <a href="#precios" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-emerald-700">
                Planes y Precios
              </a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-emerald-700">
                Preguntas Frecuentes
              </a>
            </div>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="https://app.saudade.mx/auth"
                className="w-full text-center py-2.5 text-sm font-bold text-slate-800 bg-slate-100 rounded-xl"
              >
                Iniciar Sesión
              </a>
              <a
                href="https://app.saudade.mx/auth"
                className="w-full text-center py-3 text-sm font-bold text-white bg-slate-900 rounded-xl shadow-md"
              >
                Probar Gratis 14 Días
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Decorative soft gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-violet-200/40 via-emerald-100/40 to-amber-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold shadow-xs mb-8">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Software Clínico Especializado · Cumplimiento NOM-024 en México y LATAM</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.12] font-display mb-6">
            El software de gestión clínica para{" "}
            <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-violet-800 bg-clip-text text-transparent">
              psicólogos y centros de psicología
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Ahorra hasta 8 horas a la semana. Expedientes clínicos protegidos por ley, notas SOAP con Inteligencia Artificial, lienzo para iPad, recordatorios automáticos por WhatsApp y control de cobros en un solo lugar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
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
              <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Configuración en 2 minutos
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Cancela en cualquier momento
            </span>
          </div>

          {/* ── App Visual Mockup Preview ───────────────────────────────────── */}
          <div className="relative max-w-5xl mx-auto rounded-3xl border border-slate-300/80 bg-white p-2.5 sm:p-4 shadow-2xl shadow-slate-900/10">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden text-left">
              {/* Window Bar */}
              <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-semibold text-slate-500">
                    app.saudade.mx — Consultorio Clínico
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-700 bg-emerald-100/60 px-2.5 py-1 rounded-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  NOM-024 Verificado · Conexión Segura
                </div>
              </div>

              {/* Mockup Dashboard Content Grid */}
              <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white">
                
                {/* Left Column: Patient & Note with AI */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Patient Card */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center">
                          MV
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-slate-900">Mariana Vega Morales</h4>
                          <p className="text-xs text-slate-500">Expediente #MC-104 · 28 años · Terapia Individual</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                        Legal Completo
                      </span>
                    </div>

                    <div className="text-xs bg-white p-3 rounded-xl border border-slate-200/80 space-y-1">
                      <p className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                        <FileSignature className="h-3 w-3 text-emerald-600" /> Consentimiento Informado Firmado Digitalmente
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Diagnóstico CIE-10: <strong>F41.1 Trastorno de ansiedad generalizada</strong>
                      </p>
                    </div>
                  </div>

                  {/* Note with AI Assistant */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-50/50 to-emerald-50/30 border border-violet-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-violet-900 flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-violet-600" /> Nota de Sesión #5 (Generada con Asistente IA)
                      </span>
                      <span className="text-[10px] text-slate-400">Hace 15 min</span>
                    </div>
                    <div className="space-y-1.5 text-xs text-slate-700 bg-white/80 p-3 rounded-xl border border-violet-100">
                      <p><strong>Subjetivo (S):</strong> Paciente reporta mejoría en higiene del sueño tras aplicar bitácora.</p>
                      <p><strong>Objetivo (O):</strong> Afecto congruente, discurso fluido, reducción del nivel de rumiación.</p>
                      <p><strong>Plan (P):</strong> Continuar con registro de pensamientos automáticos y técnica 5-4-3-2-1.</p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Upcoming Agenda & WhatsApp */}
                <div className="lg:col-span-5 space-y-4">
                  {/* WhatsApp Reminder status */}
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
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
                        <Check className="h-3 w-3 text-emerald-600" /> El paciente respondió: "Sí, asistiré"
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
      </section>

      {/* ── Social Proof / Standards Bar ───────────────────────────────────── */}
      <section className="py-10 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-600 mb-6">
            Confianza, seguridad y tecnología desarrollada para la psicología clínica
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center text-center">
            
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <ShieldCheck className="h-6 w-6 text-emerald-600 mb-1" />
              <span className="text-xs font-bold text-slate-900">NOM-024-SSA3</span>
              <span className="text-[10px] text-slate-500">Expediente Clínico Digital</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <Lock className="h-6 w-6 text-violet-600 mb-1" />
              <span className="text-xs font-bold text-slate-900">Cifrado AES-256</span>
              <span className="text-[10px] text-slate-500">Seguridad de grado médico</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <MessageSquare className="h-6 w-6 text-emerald-600 mb-1" />
              <span className="text-xs font-bold text-slate-900">WhatsApp Oficial</span>
              <span className="text-[10px] text-slate-500">Recordatorios sin spam</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <FileText className="h-6 w-6 text-blue-600 mb-1" />
              <span className="text-xs font-bold text-slate-900">LFPDPPP México</span>
              <span className="text-[10px] text-slate-500">Privacidad de datos</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center col-span-2 sm:col-span-1">
              <Star className="h-6 w-6 text-amber-500 mb-1 fill-amber-500" />
              <span className="text-xs font-bold text-slate-900">4.9 / 5 Estrellas</span>
              <span className="text-[10px] text-slate-500">Calificación de Terapeutas</span>
            </div>

          </div>
        </div>
      </section>

      {/* ── Interactive Features Section (Like Eholo Tabs) ─────────────────── */}
      <section id="funciones" className="py-20 md:py-28 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 mb-3 inline-block">
              Todo lo que necesitas en un mismo lugar
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mt-2 mb-4">
              Herramientas creadas específicamente para el consultorio psicológico
            </h2>
            <p className="text-base text-slate-600">
              Diseñado mano a mano con psicólogos clínicos para eliminar la fricción técnica y permitirte enfocarte en tus pacientes.
            </p>
          </div>

          {/* Interactive Feature Tabs Selector */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
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

              {/* Right Column: Visual Mockup Showcase */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 relative overflow-hidden shadow-inner">
                  
                  {/* Decorative badge floating */}
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-lg border border-slate-200 text-right shadow-xs">
                    <span className="block text-sm font-black text-emerald-700">
                      {featureTabs[activeTab].stat}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {featureTabs[activeTab].statDesc}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    {featureTabs[activeTab].mockupTag}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                    {featureTabs[activeTab].mockupTitle}
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">
                    {featureTabs[activeTab].mockupSub}
                  </p>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="h-2 w-16 bg-emerald-200 rounded-full" />
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      {featureTabs[activeTab].mockupDetail}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Lock className="h-3.5 w-3.5 text-emerald-600" /> Cifrado de 256 bits activo
                    </span>
                    <span className="text-[10px] font-bold text-slate-600">Saudade Cloud</span>
                  </div>

                </div>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* ── For Solo Practitioners vs Clinics (Diferenciación) ───────────── */}
      <section id="clinicas" className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              Una solución adaptada a tu forma de trabajar
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Tanto si ejerces de forma privada como si diriges un centro con varios psicólogos y recepcionistas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Solo Psychologist Card */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 hover:border-slate-300 transition-all space-y-6">
              <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Laptop className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Para Psicólogos Independientes</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Recupera tu paz mental. Simplifica la administración de tu consulta sin pagar sistemas caros e innecesariamente complicados.
                </p>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" /> Olvídate de enviar confirmaciones manuales por WhatsApp
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" /> Notas clínicas con IA en menos de un minuto
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" /> Lienzo manuscrito para iPad con Apple Pencil
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" /> Enlace web personalizado para que tus pacientes reserven solos
                </li>
              </ul>
              <div className="pt-2">
                <a
                  href="https://app.saudade.mx/auth"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 transition-colors"
                >
                  Comenzar mi consulta gratis
                </a>
              </div>
            </div>

            {/* Clinics and Centers Card */}
            <div className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50/40 via-white to-slate-50 p-8 shadow-sm space-y-6">
              <div className="h-12 w-12 rounded-2xl bg-violet-100 text-violet-800 flex items-center justify-center font-bold">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Para Centros y Clínicas de Psicología</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Todo tu equipo de terapeutas, coordinadores y recepción bajo una misma plataforma ordenada con permisos estrictos.
                </p>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-violet-600" /> Gestión multi-terapeuta con calendarios y salas compartidas
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-violet-600" /> Privacidad por roles (cada psicólogo solo ve sus propios pacientes)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-violet-600" /> Liquidación y cálculo de comisiones y porcentajes por terapeuta
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-violet-600" /> Bitácora global de auditoría NOM-024 para cumplimiento legal
                </li>
              </ul>
              <div className="pt-2">
                <a
                  href="https://app.saudade.mx/auth"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-colors"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
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

      {/* ── Testimonials Section ─────────────────────────────────────────── */}
      <section id="testimonios" className="py-20 md:py-28 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              Lo que opinan los psicólogos sobre Saudade
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Cientos de profesionales en México y Latinoamérica ya gestionan su consulta con nuestra plataforma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "Antes perdía hasta dos horas todos los domingos mandando mensajes para confirmar las citas de la semana. Con los recordatorios automáticos por WhatsApp de Saudade, mis pacientes confirman en un clic y las cancelaciones de último momento se redujeron en más del 70%."
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs">
                  SM
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Lic. Sofía Morales</h4>
                  <p className="text-[11px] text-slate-500">Psicoterapeuta Cognitivo-Conductual · CDMX</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "El soporte para escribir a mano en el iPad con Apple Pencil es insuperable. Me permite tomar notas y diagramas en plena sesión sin mirar una laptop fría frente al paciente, y al terminar, la IA me ayuda a estructurar mi nota SOAP en 30 segundos."
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-violet-100 text-violet-800 font-bold flex items-center justify-center text-xs">
                  AG
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Mtro. Alejandro Garza</h4>
                  <p className="text-[11px] text-slate-500">Psicólogo Clínico & Terapeuta Familiar · Monterrey</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "Para nuestra clínica de 6 terapeutas, la tranquilidad de cumplir con la NOM-024 y tener expedientes blindados con firma de consentimiento digital fue lo que nos convenció. La plataforma es limpia, rápida y el soporte técnico es extraordinario."
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-xs">
                  ER
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Dra. Elena Rincón</h4>
                  <p className="text-[11px] text-slate-500">Directora de Centro Psicológico · Guadalajara</p>
                </div>
              </div>
            </div>

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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              Planes claros diseñados para crecer con tu consulta
            </h2>
            <p className="text-base text-slate-600 mb-8 font-normal">
              Comienza hoy con 14 días de prueba gratis. Sin contratos forzosos ni comisiones ocultas.
            </p>

            {/* Monthly / Annual Toggle */}
            <div className="inline-flex items-center gap-3 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  !isAnnual ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Pago Mensual
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            
            {/* Plan 1: Individual */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Plan Inicial</h3>
                  <p className="text-xs text-slate-500 mt-1">Para psicólogos que inician su consulta privada independiente.</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">
                    {isAnnual ? "$399" : "$499"}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">MXN / mes</span>
                </div>
                <p className="text-[11px] text-emerald-700 font-bold">
                  {isAnnual ? "Facturado anualmente ($4,788 MXN/año)" : "Facturación mensual recurrente"}
                </p>
                <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Pacientes y expedientes ilimitados</div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Agenda médica y eventos personales</div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Expediente clínico bajo norma NOM-024</div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Recordatorios automáticos por WhatsApp</div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Enlace web público para reservas</div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Soporte por WhatsApp en español</div>
                </div>
              </div>
              <div className="pt-8">
                <a
                  href="https://app.saudade.mx/auth"
                  className="w-full inline-flex items-center justify-center py-3 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Probar 14 días gratis
                </a>
              </div>
            </div>

            {/* Plan 2: Pro (Featured) */}
            <div className="rounded-3xl border-2 border-slate-900 bg-gradient-to-b from-slate-900 to-slate-950 text-white p-8 flex flex-col justify-between shadow-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-400 text-slate-950 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                El Más Recomendado
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Plan Especialista Pro</h3>
                  <p className="text-xs text-slate-400 mt-1">Para psicólogos consolidados que buscan máxima productividad e IA.</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">
                    {isAnnual ? "$699" : "$849"}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">MXN / mes</span>
                </div>
                <p className="text-[11px] text-emerald-400 font-bold">
                  {isAnnual ? "Facturado anualmente ($8,388 MXN/año)" : "Facturación mensual recurrente"}
                </p>
                <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-200">
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> <strong>Todo lo del Plan Inicial, más:</strong></div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Asistente de IA para notas SOAP</div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Lienzo manuscrito para iPad con Apple Pencil</div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Consentimientos con firma digital legal</div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Consultorio virtual y telepsicología integrada</div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Catálogo de pruebas psicométricas (PHQ-9, GAD-7)</div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Control de cobros y facturación CFDI</div>
                </div>
              </div>
              <div className="pt-8">
                <a
                  href="https://app.saudade.mx/auth"
                  className="w-full inline-flex items-center justify-center py-3.5 rounded-xl text-xs font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/25 transition-all"
                >
                  Probar Plan Pro gratis 14 días
                </a>
              </div>
            </div>

            {/* Plan 3: Clinic */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Plan Centro / Clínica</h3>
                  <p className="text-xs text-slate-500 mt-1">Para clínicas, consultorios colectivos y centros psicológicos.</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">
                    {isAnnual ? "$1,499" : "$1,899"}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">MXN / mes</span>
                </div>
                <p className="text-[11px] text-emerald-700 font-bold">
                  {isAnnual ? "Incluye hasta 5 terapeutas (terapeutas extra disponibles)" : "Facturación mensual"}
                </p>
                <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> <strong>Todo lo del Plan Pro, más:</strong></div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Cuentas para múltiples psicólogos y recepcionistas</div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Permisos y roles diferenciados por especialista</div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Gestión de salas y consultorios físicos</div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Cálculo de comisiones y porcentajes por psicólogo</div>
                  <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Soporte prioritario y capacitación de equipo</div>
                </div>
              </div>
              <div className="pt-8">
                <a
                  href="https://app.saudade.mx/auth"
                  className="w-full inline-flex items-center justify-center py-3 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Probar para clínica
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── FAQ Section (Accordion) ──────────────────────────────────────── */}
      <section id="faq" className="py-20 md:py-28 bg-[#faf9f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 mb-3 inline-block">
              Resolviendo tus Dudas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Todo lo que necesitas saber antes de dar el paso hacia una consulta moderna y protegida.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <p className="text-xs sm:text-sm font-semibold text-emerald-950 mb-2">
              ¿Tienes una pregunta específica sobre tu centro o clínica?
            </p>
            <a
              href="https://wa.me/5216674738520?text=Hola,%20tengo%20una%20duda%20sobre%20Saudade"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 underline"
            >
              <MessageSquare className="h-4 w-4" /> Hablar con un especialista de Saudade por WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* ── Final Conversion CTA Banner ──────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-400/20">
            Comienza Hoy Mismo
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display max-w-2xl mx-auto leading-tight">
            Dedica tu tiempo a lo que de verdad importa: acompañar a tus pacientes.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-normal">
            Únete a la nueva generación de psicólogos que ya transformaron la administración de su consulta.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.saudade.mx/auth"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-xl shadow-emerald-500/20 hover:scale-[1.02] transition-all"
            >
              Comenzar prueba gratis de 14 días
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-slate-400 font-medium pt-2">
            Sin tarjeta de crédito requerida · Cumplimiento NOM-024 garantizado
          </p>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <img src="/saudade_icon.png" alt="Saudade" className="h-8 w-8 rounded-lg" />
                <span className="font-extrabold text-xl text-white font-display tracking-tight">saudade</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Plataforma de gestión clínica inteligente para psicólogos, terapeutas y centros de salud mental en México y Latinoamérica.
              </p>
              <p className="text-[11px] text-slate-500">
                Alineado a las normativas NOM-024-SSA3-2012 y NOM-004-SSA3-2012.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-white font-bold text-sm">Plataforma</h4>
              <ul className="space-y-1.5">
                <li><a href="#funciones" className="hover:text-white transition-colors">Expediente Clínico Digital</a></li>
                <li><a href="#funciones" className="hover:text-white transition-colors">Agenda & WhatsApp Automático</a></li>
                <li><a href="#funciones" className="hover:text-white transition-colors">Notas Clínicas con IA</a></li>
                <li><a href="#funciones" className="hover:text-white transition-colors">Notas Manuscritas para iPad</a></li>
                <li><a href="#funciones" className="hover:text-white transition-colors">Consultorio Virtual</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-white font-bold text-sm">Legal & Cumplimiento</h4>
              <ul className="space-y-1.5">
                <li><a href="https://app.saudade.mx/politicas" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Aviso de Privacidad Integral</a></li>
                <li><a href="https://app.saudade.mx/terminos" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
                <li><a href="#seguridad" className="hover:text-white transition-colors">Cumplimiento NOM-024</a></li>
                <li><a href="https://app.saudade.mx/auth" className="hover:text-white transition-colors">Portal de Terapeutas</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-white font-bold text-sm">Contacto</h4>
              <p>Atención directa a psicólogos y clínicas:</p>
              <a
                href="https://wa.me/5216674738520?text=Hola,%20quisiera%20informaci%C3%B3n%20sobre%20Saudade"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-emerald-400 hover:text-emerald-300"
              >
                <MessageSquare className="h-4 w-4" /> WhatsApp de Soporte
              </a>
              <p className="text-[11px] text-slate-500 pt-1">
                Lunes a Viernes · 9:00 AM a 7:00 PM (Hora CDMX)
              </p>
            </div>

          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
            <p>© {new Date().getFullYear()} Saudade. Todos los derechos reservados.</p>
            <p>Diseñado con empatía para profesionales de la salud mental.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
