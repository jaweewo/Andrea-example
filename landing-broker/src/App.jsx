import React, { useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BadgeCheck,
    Mail,
  Phone,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  ShieldCheck,
  Scale,
} from "lucide-react";
import andreaPhoto from "./assets/profile.jpeg";
import aboutPhoto from "./assets/about.jpg";
import servicePhoto from "./assets/service.jpg";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}


function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 text-sm md:text-base text-zinc-300 leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function SocialButton({ href = "#", label, Icon }) {
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-2xl border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white"
      asChild
    >
      <a href={href} aria-label={label}>
        <Icon className="h-4 w-4" />
      </a>
    </Button>
  );
}

export default function BrokerHipotecarioLanding() {
  const { scrollYProgress } = useScroll();
  // Parallax premium glow (sutil): se mueve y respira ligeramente al hacer scroll
  const glowY1 = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const glowScale1 = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const glowScale2 = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const glowOpacity1 = useTransform(scrollYProgress, [0, 1], [0.26, 0.14]);
  const glowOpacity2 = useTransform(scrollYProgress, [0, 1], [0.14, 0.08]);

  // 🔧 Cambia estos datos
  const profile = {
    name: "Andrea Fernández Muñoz",
    role: "Asesora de Crédito Inmobiliario",
    headline:
      "Comparo y negocio hipotecas con las principales entidades para lograr condiciones adaptadas a tu perfil, con acompañamiento total hasta notaría.",
    location: "España",
    email: "missmoney2026@gmail.com",
    phone: "+34 665 259 784",
    avatar: andreaPhoto,
    socials: {
      instagram: "https://www.instagram.com/miss.money.hipotecas/",
    },
  };

  const service = {
    title: "Intermediación y gestión de hipoteca",
    desc: "Analizo tu situación, diseño la estrategia y negocio con bancos hasta conseguir la mejor aprobación posible. Te acompaño desde el minuto 0 hasta notaría.",
    bullets: [
        "Españoles, NIE y no residentes",
        "Financiación hasta el 100%",
        "Reunificación de deudas",
        "Mejora de hipoteca desde otro banco",
        "Estudio personalizado y estrategia bancaria real"
    ],
    ctaPrimary: "Escríbeme por WhatsApp",
  };

  const about = {
    title: "Sobre mí",
    text: "Soy Andrea Fernández Muñoz, creadora de Miss Money Hipotecas, con más de 20 años de experiencia en banca. Conozco el sistema desde dentro y eso me permite diseñar estrategias reales para conseguir el SÍ de los bancos. Negocio con entidades líderes en España para lograr las mejores condiciones y acompaño a mis clientes desde el análisis inicial hasta la firma en notaría.",
    highlights: [
      { icon: <ShieldCheck className="h-4 w-4" />, text: "20+ años en banca" },
      { icon: <Scale className="h-4 w-4" />, text: "Estrategia bancaria real" },
      { icon: <BadgeCheck className="h-4 w-4" />, text: "Negocio por ti con los bancos" },
    ],
  };

  const whatsappNumber = "34665259784";
  const whatsappMessage =
    "Hola Andrea, quiero pedir mi estudio gratuito para hipoteca. ¿Te cuento mi caso?";
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const crmLink = "#"; // 🔗 enlace al CRM externo

//  const quickLinks = useMemo(
//   () => [
//      {
//        label: "Formulario inicial",
//        desc: "Ir al formulario externo",
//        icon: <ArrowRight className="h-4 w-4" />,
//        href: crmLink,
//      },
//    ],
//    [crmLink]
//  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 via-black to-black" />

        {/* Primary premium glow (parallax) */}
        <motion.div
          style={{ y: glowY1, scale: glowScale1, opacity: glowOpacity1 }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 h-[28rem] w-[60rem] rounded-full bg-[oklch(0.63_0.18_49.38)] blur-[120px]"
        />

        {/* Secondary subtle glow (parallax) */}
        <motion.div
          style={{ y: glowY2, scale: glowScale2, opacity: glowOpacity2 }}
          className="absolute top-24 left-1/2 -translate-x-1/2 h-64 w-[36rem] rounded-full bg-[oklch(0.63_0.18_49.38)] blur-[100px]"
        />
      </div>

      <main className="relative mx-auto max-w-xl px-4 pt-10 pb-14">
        {/* Header / Profile */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <div className="mx-auto h-24 w-24 rounded-full ring-2 ring-[oklch(0.63_0.18_49.38)/0.70] p-1 bg-black/50">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight">
            {profile.name}
          </h1>
          <div className="mt-1 text-zinc-300">{profile.role}.</div>

          <p className="mt-5 text-zinc-200/90 leading-relaxed">
            {profile.headline}
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-400">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
              <Phone className="h-3.5 w-3.5" />
              {profile.phone}
            </div>
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
              <Mail className="h-3.5 w-3.5" />
              {profile.email}
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-2">
            <SocialButton href={profile.socials.instagram} label="Instagram" Icon={Instagram} />
          </div>
        </motion.section>

        {/* Quick CTAs (link-in-bio style) */}
       

        {/* Servicio */}
        <section id="servicio" className="mt-10">
          <SectionTitle
            title="Servicio"
            subtitle="Un único servicio, explicado de forma clara. Si encaja, avanzamos."
          />

          <Card className="mt-4 rounded-2xl border-white/10 bg-white/5">
          <img
              src={servicePhoto}
              alt="Servicio hipotecas"
              className="w-full rounded-t-2xl object-cover max-h-56"
            />
            <CardHeader>
              <CardTitle className="text-white">{service.title}</CardTitle>
              <CardDescription className="text-zinc-300">{service.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-zinc-200">
                {service.bullets.map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[oklch(0.63_0.18_49.38)]" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <Button
                  className="w-full rounded-2xl bg-[oklch(0.63_0.18_49.38)] text-black hover:bg-[oklch(0.63_0.18_49.38)]"
                  onClick={() =>
                  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Escríbeme por WhatsApp
                  </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sobre mí */}
        <section id="sobre-mi" className="mt-10">
          <SectionTitle
            title="Sobre mí"
            subtitle="Confianza + método. Lo importante es que entiendas cada decisión."
          />

          <Card className="mt-4 rounded-2xl border-white/10 bg-white/5">
            <CardContent className="pt-6">
              <img
                src={aboutPhoto}
                alt="Andrea trabajando"
                className="w-full rounded-2xl mb-5 object-cover"
              />
              <p className="text-zinc-200 leading-relaxed">{about.text}</p>
              <div className="mt-5 grid gap-2">
                {about.highlights.map((h) => (
                  <div
                    key={h.text}
                    className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200"
                  >
                    <span className="text-[oklch(0.63_0.18_49.38)]">{h.icon}</span>
                    <span>{h.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contacto */}
        {/* Contacto */}
        <section id="contacto" className="mt-10">
          <SectionTitle
            title="Pide tu estudio gratuito"
            subtitle="Escríbeme por WhatsApp y revisamos tu caso sin compromiso."
          />

          <Card className="mt-4 rounded-2xl border-white/10 bg-white/5">
            <CardContent className="pt-6">
              <a href={waLink} target="_blank" rel="noreferrer">
                <Button className="w-full rounded-2xl bg-[oklch(0.63_0.18_49.38)] text-black hover:bg-[oklch(0.63_0.18_49.38)]">
                  Contactar por WhatsApp
                </Button>
              </a>

              <div className="mt-4 text-xs text-zinc-400 text-center">
                Te responderé personalmente por WhatsApp.
              </div>

              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-zinc-400">
                <Phone className="h-3.5 w-3.5" />
                {profile.phone}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="mt-10 pt-8 border-t border-white/10 text-center">
          <div className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {profile.name} 
          </div>
         
        </footer>
      </main>
    </div>
  );
}
