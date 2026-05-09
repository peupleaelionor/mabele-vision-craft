import {
  MessageSquare, FileText, Search, LineChart, Sparkles, Users,
  Image as ImageIcon, Video, Music, Presentation, Linkedin, Mic,
  Database, BookOpen, AlertTriangle, ServerCog,
} from "lucide-react";

export const NAV = [
  { label: "Essayer", to: "/chat" },
  { label: "Capacités", to: "/#capacites" },
  { label: "Agents", to: "/agents" },
  { label: "Tarifs", to: "/#tarifs" },
  { label: "À propos", to: "/about" },
];

/** 8 capacités visibles — le reste vit dans /agents */
export const CAPABILITIES = [
  { icon: MessageSquare, title: "Chat IA", desc: "Posez une question. Recevez une réponse claire et utile." },
  { icon: FileText, title: "Documents IA", desc: "Analysez, résumez et rédigez vos documents en quelques secondes." },
  { icon: Search, title: "Recherche & sources", desc: "Réponses traçables avec citations quand c'est nécessaire." },
  { icon: LineChart, title: "Business IA", desc: "Marché, opportunités, P&L, décisions concrètes." },
  { icon: ImageIcon, title: "Image IA", desc: "Visuels, illustrations et compositions sur mesure." },
  { icon: Presentation, title: "Diapositives IA", desc: "Présentations claires et structurées en un instant." },
  { icon: Linkedin, title: "LinkedIn IA", desc: "Posts, messages et stratégies prêts à publier." },
  { icon: Users, title: "Agents métiers", desc: "Assistants spécialisés pour entrepreneurs et équipes." },
];

/** Tous les agents — page /agents */
export const AGENTS = [
  { slug: "chat", name: "Chat", desc: "Conversations claires et utiles, partout." },
  { slug: "docs", name: "Documents", desc: "Analyses, synthèses, rédaction de PDF et contrats." },
  { slug: "image", name: "Image", desc: "Visuels, illustrations, compositions sur mesure." },
  { slug: "video", name: "Vidéo", desc: "Scénarios, montages, idées de format." },
  { slug: "music", name: "Musique", desc: "Idées sonores, paroles, ambiances." },
  { slug: "slides", name: "Diapositives", desc: "Présentations structurées et claires." },
  { slug: "linkedin", name: "LinkedIn", desc: "Posts, messages, stratégie de présence." },
  { slug: "meeting", name: "Réunion", desc: "Préparation, comptes-rendus, décisions." },
  { slug: "business", name: "Business", desc: "Marché, modèles, P&L, opérations." },
  { slug: "admin-rdc", name: "Administration RDC", desc: "Démarches, documents, conformité locale." },
  { slug: "learn", name: "Apprendre", desc: "Comprendre n'importe quel sujet, à votre rythme." },
  { slug: "decide", name: "Décider", desc: "Cadrer un choix, peser les options, agir." },
];

export const SECURITY = [
  { icon: Database, title: "Données privées", desc: "Vos contenus restent dans votre espace, sous votre contrôle." },
  { icon: BookOpen, title: "Sources vérifiables", desc: "Réponses traçables, citations claires lorsque pertinent." },
  { icon: AlertTriangle, title: "Limites assumées", desc: "Mabele indique quand elle n'est pas certaine." },
  { icon: ServerCog, title: "Infrastructure robuste", desc: "Isolation des espaces, traçabilité, contrôle utilisateur." },
];

export const PRICING = [
  { name: "Gratuit", price: "0€", tagline: "Découvrir Mabele", features: ["Chat instantané", "5 documents / mois", "Suggestions guidées"], cta: "Commencer", href: "/chat", state: "Disponible" },
  { name: "Pro", price: "Bientôt", tagline: "Entrepreneurs, créateurs, indépendants", features: ["Chat illimité", "Documents IA avancés", "Sources & recherche", "Création de contenus"], cta: "Accès anticipé", href: "/contact", state: "Bientôt", featured: true },
  { name: "Business", price: "Sur demande", tagline: "Équipes, organisations, administrations", features: ["Espaces partagés", "Agents métiers", "Sécurité renforcée", "Support dédié"], cta: "Nous contacter", href: "/contact", state: "Bientôt" },
];

export const PROMPTS = [
  "J'ai 100$ à Kinshasa, quel business réaliste cette semaine ?",
  "Résume ce document en décisions concrètes.",
  "Rédige une proposition professionnelle claire.",
  "Aide-moi à clarifier ma vision à 3 ans.",
  "Explique-moi ce sujet simplement.",
];
