import {
  MessageSquare, FileText, Search, LineChart, Sparkles, Users,
  Database, BookOpen, AlertTriangle, ServerCog,
} from "lucide-react";

export const NAV = [
  { label: "Chat", to: "/chat" },
  { label: "Capacités", to: "/#capacites" },
  { label: "Sécurité", to: "/#securite" },
  { label: "Tarifs", to: "/#tarifs" },
  { label: "Contact", to: "/contact" },
];

export const CAPABILITIES = [
  { icon: MessageSquare, title: "Chat IA", desc: "Réponses claires, contextualisées, utiles." },
  { icon: FileText, title: "Documents IA", desc: "Analyse PDF, synthèse, rédaction, contrats, présentations." },
  { icon: Search, title: "Recherche & sources", desc: "Réponses traçables avec citations quand nécessaire." },
  { icon: LineChart, title: "Business & marché", desc: "Analyse, comparaison, opportunités, risques." },
  { icon: Sparkles, title: "Création IA", desc: "Textes, images, campagnes, contenus réseaux." },
  { icon: Users, title: "Agents métiers", desc: "Assistants spécialisés pour entrepreneurs, équipes et organisations." },
];

export const SECURITY = [
  { icon: Database, title: "Données privées", desc: "Vos contenus restent dans votre espace, sous votre contrôle." },
  { icon: BookOpen, title: "Sources vérifiables", desc: "Réponses traçables, citations claires lorsque pertinent." },
  { icon: AlertTriangle, title: "Limites affichées", desc: "MABELE indique quand elle n'est pas certaine." },
  { icon: ServerCog, title: "Infrastructure robuste", desc: "Isolation des espaces, traçabilité, contrôle utilisateur." },
];

export const PRICING = [
  { name: "Gratuit", price: "0€", tagline: "Tester MABELE", features: ["Chat instantané", "5 documents / mois", "Suggestions guidées"], cta: "Commencer", href: "/chat", state: "Disponible" },
  { name: "Pro", price: "Bientôt", tagline: "Entrepreneurs, créateurs, indépendants", features: ["Chat illimité", "Documents IA avancés", "Sources & recherche", "Création de contenus"], cta: "Accès anticipé", href: "/contact", state: "Bientôt", featured: true },
  { name: "Business", price: "Sur demande", tagline: "Équipes, organisations, administrations", features: ["Espaces partagés", "Agents métiers", "Sécurité renforcée", "Support dédié"], cta: "Nous contacter", href: "/contact", state: "Bientôt" },
];

export const PROMPTS = [
  "Résume ce document en décisions concrètes",
  "Aide-moi à structurer un projet rentable",
  "Analyse ce marché en Afrique et en Europe",
  "Rédige une proposition professionnelle",
  "Explique-moi ce sujet simplement",
];
