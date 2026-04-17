import * as React from "react"
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  MapPin, 
  BookOpen, 
  ShoppingBag, 
  ArrowRight,
  CheckCircle2,
  Clock,
  ChevronRight,
  Star,
  Plus,
  Filter,
  Search,
  Download,
  QrCode,
  Share2,
  MessageSquare,
  Heart,
  Gift,
  CheckSquare,
  DollarSign,
  UserPlus,
  Shield,
  Settings,
  Bell,
  X,
  Image as ImageIcon,
  Video,
  Paperclip,
  Youtube,
  Play,
  Link as LinkIcon,
  FileText,
  Check,
  ListTodo,
  User,
  MoreVertical,
  RefreshCw,
  Award,
  Sparkles,
  PlayCircle,
  Captions,
  AlertTriangle,
  CreditCard,
  Mail
} from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { Layout } from "./components/Layout"
import { JornadaView } from "./components/JornadaView"
import { PastorsView } from "./components/PastorsView"
import { SocialView } from "./components/SocialView"
import { UnitsView } from "./components/UnitsView"
import { SocialMediaView } from "./components/SocialMediaView"
import { StoreView } from "./components/StoreView"
import { MinistriesView } from "./components/MinistriesView"
import { PastoralCareView } from "./components/PastoralCareView"
import { FinanceView } from "./components/FinanceView"
import { EventsView } from "./components/EventsView"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts'

import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel"

import QRCode from "react-qr-code"

export type QuizQuestion = { id: string; question: string; options: string[]; correctAnswerIndex: number; };
export type OpenQuestion = { id: string; question: string; rubric: string; };
export type Quiz = { id: string; questions: QuizQuestion[]; passingScore: number; openQuestions?: OpenQuestion[]; };
export type Lesson = { 
  id: string; title: string; videoId: string; duration: string; 
  quiz?: Quiz; 
  summary?: string; 
  transcript?: string; 
  subtitles?: { time: string; text: string }[]; 
};
export type Module = { id: string; title: string; lessons: Lesson[]; };
export type Course = {
  id: string; title: string; description: string; level: string; duration: string;
  students: number; img: string; modules: Module[]; professor: string;
  status: 'published' | 'draft'; category: string; learningOutcomes: string[];
  rating: number; price?: number;
};
export type Note = { id: string; courseId: string; lessonId: string; timestamp: number; text: string; };
export type ForumQuestion = { id: string; courseId: string; lessonId: string; user: string; text: string; answer?: string; isOfficial?: boolean; createdAt: string; };
export type Enrollment = {
  courseId: string; progress: number; completedLessons: string[];
  lastLessonId?: string; enrolledAt: string; finalGrade?: number; completedAt?: string;
  mistakes?: { lessonId: string; questionId: string; questionText: string }[];
};
export type Badge = { id: string; name: string; description: string; icon: string; earnedAt: string; };
export type CourseRecommendation = { id: string; courseId: string; memberId: string; recommendedBy: string; date: string; };
export type LearningTrack = { id: string; title: string; description: string; courseIds: string[]; };
export type Plan = { id: string; name: string; price: number; interval: 'monthly' | 'yearly'; features: string[]; type: 'individual' | 'family' };
export type Transaction = { id: string; userId: string; amount: number; type: 'course' | 'subscription'; itemId: string; status: 'completed' | 'pending'; date: string; method: 'pix' | 'card' };
export type Coupon = { id: string; code: string; discountPercent: number; active: boolean };
export type AutomationRule = { id: string; name: string; trigger: string; action: string; active: boolean };

export type CellMember = {
  id: string;
  name: string;
  role: string;
  phone: string;
  address: string;
  availability: string[];
};

export type CellTask = {
  id: number;
  title: string;
  description: string;
  category: string;
  assignee: string | null;
  column: string;
};

export type CellEvent = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  targetAudience: string;
};

export type CellPost = {
  id: number;
  author: string;
  type: string;
  time: string;
  content: string;
  video?: string;
  images?: string[];
  likes: number;
  comments: number;
  liked: boolean;
};

export type CellMaterial = {
  id: number;
  title: string;
  type: string;
  description: string;
};

export type CellVisitor = {
  id: number;
  name: string;
  phone: string;
  date: string;
  status: string;
};

export type CellFinance = {
  id: number;
  type: string;
  amount: number;
  date: string;
  description: string;
};

export type CellReport = {
  id: number;
  date: string;
  present: number;
  visitors: number;
  summary: string;
};

export type CellPrayer = {
  id: number;
  reason: string;
  details: string;
  isPrivate: boolean;
};

export type CellReferral = {
  id: number;
  name: string;
  phone: string;
  notes: string;
};

type CellContextType = {
  members: CellMember[];
  tasks: CellTask[];
  categories: string[];
  events: CellEvent[];
  posts: CellPost[];
  materials: CellMaterial[];
  visitors: CellVisitor[];
  finances: CellFinance[];
  reports: CellReport[];
  prayers: CellPrayer[];
  referrals: CellReferral[];
  setTasks: React.Dispatch<React.SetStateAction<CellTask[]>>;
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  generateScale: () => void;
  takeTask: (taskId: number, userName: string) => void;
  untakeTask: (taskId: number) => void;
  addTask: (task: Omit<CellTask, 'id'>) => void;
  updateMemberAvailability: (memberId: string, availability: string[]) => void;
  addEvent: (event: Omit<CellEvent, 'id'>) => void;
  addPost: (post: Omit<CellPost, 'id'>) => void;
  updatePost: (post: CellPost) => void;
  addMaterial: (material: Omit<CellMaterial, 'id'>) => void;
  addVisitor: (visitor: Omit<CellVisitor, 'id'>) => void;
  addMember: (member: Omit<CellMember, 'id'>) => void;
  addFinance: (finance: Omit<CellFinance, 'id'>) => void;
  addReport: (report: Omit<CellReport, 'id'>) => void;
  addPrayer: (prayer: Omit<CellPrayer, 'id'>) => void;
  addReferral: (referral: Omit<CellReferral, 'id'>) => void;
};

const CellContext = React.createContext<CellContextType | null>(null);

export function useCell() {
  const ctx = React.useContext(CellContext);
  if (!ctx) throw new Error("useCell must be used within CellProvider");
  return ctx;
}

export function CellProvider({ children }: { children: React.ReactNode }) {
  const [members, setMembers] = React.useState<CellMember[]>([
    { id: "1", name: "João Silva", role: "Líder", phone: "(27) 99999-9999", address: "Centro", availability: ["Louvor", "Recepção"] },
    { id: "2", name: "Maria Costa", role: "Líder em Treinamento", phone: "(27) 99999-9999", address: "Praia do Morro", availability: ["Lanche", "Limpeza"] },
    { id: "3", name: "Pedro Oliveira", role: "Membro", phone: "(27) 99999-9999", address: "Muquiçaba", availability: ["Louvor"] },
    { id: "4", name: "Ana Santos", role: "Membro", phone: "(27) 99999-9999", address: "Itapebussu", availability: ["Recepção", "Limpeza"] },
    { id: "5", name: "Lucas Souza", role: "Membro", phone: "(27) 99999-9999", address: "Santa Rosa", availability: ["Lanche"] },
  ]);

  const [categories, setCategories] = React.useState(['Louvor', 'Lanche', 'Recepção', 'Limpeza', 'Outros']);

  const [tasks, setTasks] = React.useState<CellTask[]>([
    { id: 1, title: 'Ministrar Louvor', description: 'Precisamos de alguém para tocar violão e cantar 3 músicas.', category: 'Louvor', assignee: null, column: 'Próximo Encontro (15/04)' },
    { id: 2, title: 'Levar Salgado', description: 'Cento de salgado assado.', category: 'Lanche', assignee: 'Maria Costa', column: 'Próximo Encontro (15/04)' },
    { id: 3, title: 'Recepção na Porta', description: 'Receber os visitantes com alegria.', category: 'Recepção', assignee: null, column: 'Encontro (22/04)' },
    { id: 4, title: 'Limpeza pós-célula', description: 'Ajudar a organizar a casa após o encontro.', category: 'Limpeza', assignee: null, column: 'Geral' }
  ]);

  const [events, setEvents] = React.useState<CellEvent[]>([
    { id: 1, title: 'Encontro da Célula', date: '2026-04-15', time: '19:30', location: 'Casa da Maria', description: 'Nosso encontro semanal.', targetAudience: 'Toda a Célula' },
    { id: 2, title: 'Vigília', date: '2026-04-22', time: '22:00', location: 'Igreja', description: 'Vigília de oração.', targetAudience: 'Toda a Célula' }
  ]);

  const [posts, setPosts] = React.useState<CellPost[]>([
    { id: 1, author: "Líder João", type: "Aviso", time: "Há 2 horas", content: "Pessoal, assistam esse louvor maravilhoso para nos prepararmos para o encontro de amanhã!", video: "https://www.youtube.com/embed/jfKfPfyJRdk", likes: 5, comments: 2, liked: false },
    { id: 2, author: "Maria Costa", type: "Galeria", time: "Ontem", content: "Muito feliz com o que Deus fez no nosso último encontro. Que palavra abençoada!", images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400&auto=format&fit=crop", "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=400&auto=format&fit=crop"], likes: 12, comments: 4, liked: false }
  ]);

  const [materials, setMaterials] = React.useState<CellMaterial[]>([
    { id: 1, title: "Estudo: O Poder da Oração", type: "PDF", description: "Material de apoio para o próximo encontro." },
    { id: 2, title: "Livro: Liderança com Propósito", type: "Livro", description: "Leitura recomendada para o mês." },
    { id: 3, title: "Série: Identidade", type: "Vídeo", description: "Série de mensagens do Pr. Sênior." }
  ]);

  const [visitors, setVisitors] = React.useState<CellVisitor[]>([
    { id: 1, name: "Carlos Silva", phone: "(11) 99999-9999", date: "2026-04-10", status: "Novo" },
    { id: 2, name: "Mariana Costa", phone: "(11) 88888-8888", date: "2026-04-03", status: "Em Consolidação" }
  ]);

  const [finances, setFinances] = React.useState<CellFinance[]>([
    { id: 1, type: "Entrada (Receita)", amount: 150, date: "2026-04-10", description: "Oferta Célula" },
    { id: 2, type: "Saída (Despesa)", amount: 45, date: "2026-04-08", description: "Lanche Encontro" },
    { id: 3, type: "Entrada (Receita)", amount: 120, date: "2026-04-03", description: "Oferta Célula" }
  ]);

  const [reports, setReports] = React.useState<CellReport[]>([]);
  const [prayers, setPrayers] = React.useState<CellPrayer[]>([]);
  const [referrals, setReferrals] = React.useState<CellReferral[]>([]);

  const takeTask = (taskId: number, userName: string) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, assignee: userName } : t));
  };

  const untakeTask = (taskId: number) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, assignee: null } : t));
  };

  const addTask = (task: Omit<CellTask, 'id'>) => {
    setTasks(prev => [...prev, { ...task, id: Date.now() }]);
  };

  const generateScale = () => {
    setTasks(prev => prev.map(t => {
      if (!t.assignee) {
        const availableMembers = members.filter(m => m.availability.includes(t.category));
        if (availableMembers.length > 0) {
          const randomMember = availableMembers[Math.floor(Math.random() * availableMembers.length)];
          return { ...t, assignee: randomMember.name };
        }
      }
      return t;
    }));
  };

  const updateMemberAvailability = (memberId: string, availability: string[]) => {
    setMembers(prev => prev.map(m => m.id === memberId ? { ...m, availability } : m));
  };

  const addEvent = (event: Omit<CellEvent, 'id'>) => {
    setEvents(prev => [...prev, { ...event, id: Date.now() }]);
  };

  const addPost = (post: Omit<CellPost, 'id'>) => {
    setPosts(prev => [{ ...post, id: Date.now() }, ...prev]);
  };

  const updatePost = (post: CellPost) => {
    setPosts(prev => prev.map(p => p.id === post.id ? post : p));
  };

  const addMaterial = (material: Omit<CellMaterial, 'id'>) => {
    setMaterials(prev => [...prev, { ...material, id: Date.now() }]);
  };

  const addVisitor = (visitor: Omit<CellVisitor, 'id'>) => {
    setVisitors(prev => [...prev, { ...visitor, id: Date.now() }]);
  };

  const addMember = (member: Omit<CellMember, 'id'>) => {
    setMembers(prev => [...prev, { ...member, id: String(Date.now()) }]);
  };

  const addFinance = (finance: Omit<CellFinance, 'id'>) => {
    setFinances(prev => [...prev, { ...finance, id: Date.now() }]);
  };

  const addReport = (report: Omit<CellReport, 'id'>) => {
    setReports(prev => [...prev, { ...report, id: Date.now() }]);
  };

  const addPrayer = (prayer: Omit<CellPrayer, 'id'>) => {
    setPrayers(prev => [...prev, { ...prayer, id: Date.now() }]);
  };

  const addReferral = (referral: Omit<CellReferral, 'id'>) => {
    setReferrals(prev => [...prev, { ...referral, id: Date.now() }]);
  };

  return (
    <CellContext.Provider value={{ members, tasks, categories, events, posts, materials, visitors, finances, reports, prayers, referrals, setTasks, setCategories, generateScale, takeTask, untakeTask, addTask, updateMemberAvailability, addEvent, addPost, updatePost, addMaterial, addVisitor, addMember, addFinance, addReport, addPrayer, addReferral }}>
      {children}
    </CellContext.Provider>
  );
}

type SchoolContextType = {
  courses: Course[];
  enrollments: Enrollment[];
  savedCourses: string[];
  notes: Note[];
  forumQuestions: ForumQuestion[];
  enrollInCourse: (courseId: string) => void;
  markLessonComplete: (courseId: string, lessonId: string) => void;
  addCourse: (course: Course) => void;
  updateCourse: (course: Course) => void;
  deleteCourse: (courseId: string) => void;
  toggleSavedCourse: (courseId: string) => void;
  addNote: (note: Omit<Note, 'id'>) => void;
  addForumQuestion: (question: Omit<ForumQuestion, 'id' | 'createdAt'>) => void;
  answerForumQuestion: (questionId: string, answer: string, isOfficial?: boolean) => void;
  badges: Badge[];
  recommendations: CourseRecommendation[];
  tracks: LearningTrack[];
  recommendCourse: (memberId: string, courseId: string) => void;
  addTrack: (track: LearningTrack) => void;
  plans: Plan[];
  transactions: Transaction[];
  coupons: Coupon[];
  automations: AutomationRule[];
  purchaseCourse: (courseId: string, method: 'pix' | 'card') => void;
  subscribeToPlan: (planId: string, method: 'pix' | 'card') => void;
};

const SchoolContext = React.createContext<SchoolContextType | null>(null);

export function useSchool() {
  const ctx = React.useContext(SchoolContext);
  if (!ctx) throw new Error("useSchool must be used within SchoolProvider");
  return ctx;
}

const initialCourses: Course[] = [
  {
    id: "c1", title: "Fundamentos da Fé", description: "Compreender os princípios fundamentais da fé cristã e sua aplicação prática.",
    level: "Iniciante", duration: "12h", students: 450, img: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=600&auto=format&fit=crop",
    professor: "Pr. João Silva", status: "published", category: "Teologia",
    learningOutcomes: ["Compreender os princípios fundamentais da fé cristã", "Aplicar a graça no dia a dia", "Desenvolver uma vida de oração", "Entender o propósito do jejum"],
    rating: 4.9, price: 0,
    modules: [
      { id: "m1", title: "Módulo 1: Introdução", lessons: [
        { id: "l1", title: "Aula 1: O que é a fé?", videoId: "jfKfPfyJRdk", duration: "15:00", 
          summary: "Nesta aula, exploramos o conceito bíblico de fé baseado em Hebreus 11:1. A fé é apresentada não como um sentimento cego, mas como a certeza absoluta das coisas que esperamos e a convicção de fatos que não vemos. Discutimos como a fé é ativada ouvindo a Palavra de Deus e como ela transforma nossa perspectiva diária.",
          subtitles: [
            { time: "0:00", text: "Olá a todos, bem-vindos à nossa primeira aula." },
            { time: "0:05", text: "Hoje vamos falar sobre o que realmente é a fé." },
            { time: "0:10", text: "Segundo Hebreus 11:1, a fé é a certeza..." }
          ],
          quiz: {
          id: "q1", passingScore: 70, questions: [
            { id: "qq1", question: "Qual a definição bíblica de fé segundo Hebreus 11:1?", options: ["Certeza das coisas que se esperam", "Acreditar no impossível", "Sentimento positivo", "Religião"], correctAnswerIndex: 0 },
            { id: "qq2", question: "A fé vem pelo quê?", options: ["Pelo ver", "Pelo ouvir a palavra", "Pelo sentir", "Pelo pensar"], correctAnswerIndex: 1 }
          ],
          openQuestions: [
            { id: "oq1", question: "Explique com suas próprias palavras como a fé pode transformar a perspectiva diária de uma pessoa, dando um exemplo prático.", rubric: "O aluno deve mencionar a mudança de foco do problema para a promessa de Deus. Deve dar um exemplo prático, como enfrentar uma dificuldade financeira ou de saúde mantendo a paz e a confiança." }
          ]
        } },
        { id: "l2", title: "Aula 2: A Graça", videoId: "jfKfPfyJRdk", duration: "20:00" }
      ]},
      { id: "m2", title: "Módulo 2: Aprofundamento", lessons: [
        { id: "l3", title: "Aula 3: Oração", videoId: "jfKfPfyJRdk", duration: "25:00" },
        { id: "l4", title: "Aula 4: Jejum", videoId: "jfKfPfyJRdk", duration: "30:00" }
      ]}
    ]
  },
  {
    id: "c2", title: "Liderança de Célula", description: "Formando líderes para multiplicar.",
    level: "Intermediário", duration: "20h", students: 120, img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
    professor: "Pr. Marcos", status: "published", category: "Liderança",
    learningOutcomes: ["Entender o chamado à liderança", "Desenvolver o coração de um líder", "Aprender a multiplicar discípulos"],
    rating: 4.8, price: 49.90,
    modules: [
      { id: "m1", title: "Módulo 1: O Chamado", lessons: [
        { id: "l1", title: "Aula 1: O Coração do Líder", videoId: "jfKfPfyJRdk", duration: "18:00" }
      ]}
    ]
  },
  {
    id: "c3", title: "Cultura do Reino", description: "Vivendo os valores do Reino na sociedade.",
    level: "Iniciante", duration: "10h", students: 310, img: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=600&auto=format&fit=crop",
    professor: "Pra. Ana", status: "published", category: "Vida Cristã",
    learningOutcomes: ["Compreender os valores do Reino de Deus", "Aplicar os valores na sociedade", "Viver uma vida cristã autêntica"],
    rating: 5.0, price: 29.90,
    modules: [
      { id: "m1", title: "Módulo 1: Valores", lessons: [
        { id: "l1", title: "Aula 1: Introdução", videoId: "jfKfPfyJRdk", duration: "12:00" }
      ]}
    ]
  }
];

export function SchoolProvider({ children }: { children: React.ReactNode }) {
  const [courses, setCourses] = React.useState<Course[]>(initialCourses);
  const [enrollments, setEnrollments] = React.useState<Enrollment[]>([
    { courseId: "c1", progress: 50, completedLessons: ["l1", "l2"], lastLessonId: "l2", enrolledAt: new Date().toISOString() }
  ]);
  const [savedCourses, setSavedCourses] = React.useState<string[]>(["c2"]);
  const [notes, setNotes] = React.useState<Note[]>([]);
  const [forumQuestions, setForumQuestions] = React.useState<ForumQuestion[]>([
    { id: "fq1", courseId: "c1", lessonId: "l1", user: "Maria", text: "Como aplico isso no meu dia a dia?", createdAt: new Date().toISOString() }
  ]);
  const [badges, setBadges] = React.useState<Badge[]>([
    { id: "b1", name: "Primeiro Passo", description: "Iniciou seu primeiro curso.", icon: "🏃", earnedAt: new Date().toISOString() }
  ]);
  const [recommendations, setRecommendations] = React.useState<CourseRecommendation[]>([]);
  const [tracks, setTracks] = React.useState<LearningTrack[]>([
    { id: "t1", title: "A Jornada", description: "Trilha principal de discipulado (Ganhar, Consolidar, Treinar, Enviar).", courseIds: ["c1", "c3", "c2"] }
  ]);
  const [plans, setPlans] = React.useState<Plan[]>([
    { id: "p1", name: "Mensal Individual", price: 29.90, interval: "monthly", type: "individual", features: ["Acesso a todos os cursos", "Certificados digitais"] },
    { id: "p2", name: "Anual Família", price: 299.90, interval: "yearly", type: "family", features: ["Acesso para 4 pessoas", "Cursos exclusivos", "Suporte prioritário"] }
  ]);
  const [transactions, setTransactions] = React.useState<Transaction[]>([
    { id: "tx1", userId: "u1", amount: 29.90, type: "subscription", itemId: "p1", status: "completed", date: new Date().toISOString(), method: "pix" }
  ]);
  const [coupons, setCoupons] = React.useState<Coupon[]>([
    { id: "cp1", code: "BEMVINDO10", discountPercent: 10, active: true }
  ]);
  const [automations, setAutomations] = React.useState<AutomationRule[]>([
    { id: "a1", name: "Boas-vindas", trigger: "new_enrollment", action: "send_email", active: true },
    { id: "a2", name: "Carrinho Abandonado", trigger: "abandoned_checkout", action: "send_push", active: true }
  ]);

  const purchaseCourse = (courseId: string, method: 'pix' | 'card') => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;
    const amount = course.price || 0;
    setTransactions([...transactions, { id: `tx${Date.now()}`, userId: "u1", amount, type: "course", itemId: courseId, status: "completed", date: new Date().toISOString(), method }]);
    enrollInCourse(courseId);
  };

  const subscribeToPlan = (planId: string, method: 'pix' | 'card') => {
    const plan = plans.find(p => p.id === planId);
    if (!plan) return;
    setTransactions([...transactions, { id: `tx${Date.now()}`, userId: "u1", amount: plan.price, type: "subscription", itemId: planId, status: "completed", date: new Date().toISOString(), method }]);
  };

  const enrollInCourse = (courseId: string) => {
    if (!enrollments.find(e => e.courseId === courseId)) {
      setEnrollments([...enrollments, { courseId, progress: 0, completedLessons: [], enrolledAt: new Date().toISOString() }]);
    }
  };

  const markLessonComplete = (courseId: string, lessonId: string) => {
    setEnrollments(prev => prev.map(e => {
      if (e.courseId === courseId && !e.completedLessons.includes(lessonId)) {
        const course = courses.find(c => c.id === courseId);
        const totalLessons = course?.modules.reduce((acc, m) => acc + m.lessons.length, 0) || 1;
        const newCompleted = [...e.completedLessons, lessonId];
        const progress = Math.round((newCompleted.length / totalLessons) * 100);
        return { ...e, completedLessons: newCompleted, progress, lastLessonId: lessonId, finalGrade: progress === 100 ? 10.0 : undefined, completedAt: progress === 100 ? new Date().toISOString() : undefined };
      }
      return e;
    }));
  };

  const addCourse = (course: Course) => setCourses([...courses, course]);
  const updateCourse = (course: Course) => setCourses(courses.map(c => c.id === course.id ? course : c));
  const deleteCourse = (courseId: string) => setCourses(courses.filter(c => c.id !== courseId));

  const toggleSavedCourse = (courseId: string) => {
    setSavedCourses(prev => prev.includes(courseId) ? prev.filter(id => id !== courseId) : [...prev, courseId]);
  };

  const addNote = (note: Omit<Note, 'id'>) => {
    setNotes([...notes, { ...note, id: Math.random().toString(36).substr(2, 9) }]);
  };

  const addForumQuestion = (question: Omit<ForumQuestion, 'id' | 'createdAt'>) => {
    setForumQuestions([...forumQuestions, { ...question, id: Math.random().toString(36).substr(2, 9), createdAt: new Date().toISOString() }]);
  };

  const answerForumQuestion = (questionId: string, answer: string, isOfficial?: boolean) => {
    setForumQuestions(prev => prev.map(q => q.id === questionId ? { ...q, answer, isOfficial } : q));
  };

  const recommendCourse = (memberId: string, courseId: string) => {
    setRecommendations([...recommendations, { id: Math.random().toString(36).substr(2, 9), courseId, memberId, recommendedBy: "Você", date: new Date().toISOString() }]);
  };

  const addTrack = (track: LearningTrack) => {
    setTracks([...tracks, track]);
  };

  return (
    <SchoolContext.Provider value={{ 
      courses, enrollments, savedCourses, notes, forumQuestions, 
      enrollInCourse, markLessonComplete, addCourse, updateCourse, deleteCourse, 
      toggleSavedCourse, addNote, addForumQuestion, answerForumQuestion,
      badges, recommendations, tracks, recommendCourse, addTrack,
      plans, transactions, coupons, automations, purchaseCourse, subscribeToPlan
    }}>
      {children}
    </SchoolContext.Provider>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = React.useState("home")
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [userRole, setUserRole] = React.useState<'member' | 'leader' | 'pastor'>('leader')
  const [isLeader] = React.useState(true) // Simulating leader role

  // Handle tab changes based on login status
  React.useEffect(() => {
    if (!isLoggedIn && (activeTab === 'school' || activeTab === 'members' || activeTab === 'admin')) {
      setActiveTab('home')
    }
  }, [isLoggedIn, activeTab])

  return (
    <CellProvider>
      <SchoolProvider>
        <Layout 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          isLoggedIn={isLoggedIn} 
          userRole={userRole}
        >
          <div className="fixed bottom-20 right-4 z-[60] flex flex-col gap-2">
            <Button 
              size="sm" 
              variant="outline" 
              className="bg-zinc-900 border-white/10 text-[10px] h-8"
              onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
              {isLoggedIn ? "Logout (Demo)" : "Login (Demo)"}
            </Button>
          </div>

          {activeTab === "home" && <HomeView onTabChange={setActiveTab} />}
          {activeTab === "members" && <MembersView />}
          {activeTab === "cell" && <CellView isLoggedIn={isLoggedIn} isLeader={isLeader} onTabChange={setActiveTab} />}
          {activeTab === "school" && <SchoolView />}
          {activeTab === "ministries" && <MinistriesView />}
          {activeTab === "store" && <StoreView />}
          {activeTab === "events" && <EventsView />}
          {activeTab === "finance" && <FinanceView />}
          {activeTab === "pastors" && <PastorsView />}
          {activeTab === "social" && <SocialView />}
          {activeTab === "units" && <UnitsView />}
          {activeTab === "media" && <SocialMediaView />}
          {activeTab === "jornada" && <JornadaView />}
          {activeTab === "admin" && <AdminView />}
          {activeTab === "pastoral" && <PastoralCareView />}
        </Layout>
      </SchoolProvider>
    </CellProvider>
  )
}

function CellView({ isLoggedIn, isLeader, onTabChange }: { isLoggedIn: boolean; isLeader: boolean; onTabChange: (tab: string) => void }) {
  if (!isLoggedIn) {
    return <CellPublicView onTabChange={onTabChange} />
  }
  return <CellManagementView isLeader={isLeader} />
}

function CellPublicView({ onTabChange }: { onTabChange: (tab: string) => void }) {
  const [search, setSearch] = React.useState("")
  
  const cells = [
    { id: 1, name: "Célula Hope", leader: "João Silva", neighborhood: "Muquiçaba", day: "Quinta", time: "20:00", phone: "5527999999999" },
    { id: 2, name: "Célula Vida", leader: "Maria Santos", neighborhood: "Praia do Morro", day: "Terça", time: "19:30", phone: "5527999999999" },
    { id: 3, name: "Célula Luz", leader: "Pedro Oliveira", neighborhood: "Centro", day: "Quarta", time: "20:00", phone: "5527999999999" },
    { id: 4, name: "Célula Graça", leader: "Ana Costa", neighborhood: "Itapebussu", day: "Sexta", time: "19:00", phone: "5527999999999" },
    { id: 5, name: "Célula Paz", leader: "Lucas Souza", neighborhood: "Santa Rosa", day: "Segunda", time: "20:00", phone: "5527999999999" },
  ]

  const filteredCells = cells.filter(cell => 
    cell.name.toLowerCase().includes(search.toLowerCase()) ||
    cell.neighborhood.toLowerCase().includes(search.toLowerCase()) ||
    cell.leader.toLowerCase().includes(search.toLowerCase())
  )

  const handleJoinCell = (cell: typeof cells[0]) => {
    const message = encodeURIComponent(`Olá! Gostaria de participar da ${cell.name} em ${cell.neighborhood}. Como faço?`);
    window.open(`https://wa.me/${cell.phone}?text=${message}`, '_blank');
  };

  return (
    <div className="space-y-20 pb-20">
      {/* DNA Section */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/10 p-8 md:p-20">
        <div className="relative z-10 max-w-3xl space-y-8">
          <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1.5 rounded-full uppercase tracking-[0.2em] text-[10px] font-black bg-primary/5">
            Nosso DNA
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] font-serif">
            UMA IGREJA EM <br />
            <span className="text-primary italic font-light">CÉLULAS</span>
          </h1>
          <div className="space-y-6 text-xl text-white/60 leading-relaxed font-medium">
            <p>
              Em nossa comunidade de fé seguimos o modelo celular, onde acreditamos que o <span className="text-white">Discipulado</span> acontece de forma <span className="text-primary italic">Natural</span>.
            </p>
            <p>
              Acreditamos também que a igreja acontece nos lares, onde o amor de Deus é compartilhado de forma prática e relacional. Nossas células são o coração da nossa comunidade.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none hidden lg:block">
          <Users className="w-full h-full text-primary" />
        </div>
      </section>

      {/* Interactive Map */}
      <section className="space-y-10">
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-black tracking-tight font-serif italic flex items-center gap-4">
              <MapPin className="text-primary h-8 w-8" />
              Mapa de Células
            </h2>
            <p className="text-white/50">Encontre a família mais próxima de você.</p>
          </div>
          <Badge variant="outline" className="border-white/10 px-4 py-1.5 rounded-full font-bold">{cells.length} Células Ativas</Badge>
        </div>
        <div className="glass-card rounded-[2.5rem] overflow-hidden h-[500px] md:h-[600px] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.206411545645!2d-40.5055!3d-20.6695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQwJzEwLjIiUyA0MMKwMzAnMTkuOCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale contrast-125 invert brightness-90"
          />
          <div className="absolute inset-0 pointer-events-none border-[12px] border-zinc-900 rounded-[2.5rem]" />
        </div>
      </section>

      {/* Searchable List */}
      <section className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-black tracking-tight font-serif italic">Lista de Células</h2>
            <p className="text-white/50">Busque por bairro, líder ou nome da célula.</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
            <Input 
              placeholder="Buscar células..." 
              className="pl-12 h-14 bg-zinc-900 border-white/10 rounded-full text-lg focus:ring-primary/50"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCells.map(cell => (
            <motion.div
              key={cell.id}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-[2rem] space-y-6 group"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="font-black text-2xl font-serif italic group-hover:text-primary transition-colors">{cell.name}</h3>
                  <p className="text-sm text-white/50 font-medium">Líder: {cell.leader}</p>
                </div>
                <Badge className="bg-primary/10 text-primary border-none font-bold px-3 py-1 rounded-full">{cell.neighborhood}</Badge>
              </div>
              <div className="flex items-center gap-6 text-sm text-white/40 font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  {cell.day}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  {cell.time}
                </div>
              </div>
              <Button 
                onClick={() => handleJoinCell(cell)}
                className="w-full h-12 bg-white/5 hover:bg-primary hover:text-black border-white/10 transition-all rounded-2xl font-bold text-sm uppercase tracking-widest"
              >
                Quero Participar
              </Button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

function CellSchoolTab({ members }: { members: CellMember[] }) {
  const { courses, recommendCourse, recommendations } = useSchool();
  const [selectedMember, setSelectedMember] = React.useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = React.useState<string | null>(null);
  const [showRecommendModal, setShowRecommendModal] = React.useState(false);

  // Mock progress for cell members
  const getMemberProgress = (memberId: string) => {
    return Math.floor(Math.random() * 100);
  };

  return (
    <div className="space-y-6">
      {showRecommendModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowRecommendModal(false)} />
          <div className="relative bg-zinc-900 border border-white/10 rounded-xl w-full max-w-md p-6 shadow-2xl">
            <h2 className="text-xl font-bold mb-2">Recomendar Curso</h2>
            <p className="text-sm text-white/60 mb-6">Escolha um curso para atribuir a este membro.</p>
            
            <div className="space-y-4">
              <select 
                className="w-full h-10 px-3 rounded-md bg-black border border-white/10 text-sm"
                onChange={(e) => setSelectedCourse(e.target.value)}
                value={selectedCourse || ""}
              >
                <option value="" disabled>Selecione um curso...</option>
                {courses.map(c => (
                  <option key={c.id} value={c.id}>{c.title}</option>
                ))}
              </select>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 border-white/10" onClick={() => setShowRecommendModal(false)}>Cancelar</Button>
                <Button 
                  className="flex-1 bg-primary text-black" 
                  disabled={!selectedCourse}
                  onClick={() => {
                    if (selectedCourse && selectedMember) {
                      recommendCourse(selectedMember, selectedCourse);
                      setSelectedCourse(null);
                      setShowRecommendModal(false);
                    }
                  }}
                >
                  Enviar Recomendação
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-zinc-900 border-white/10">
          <CardContent className="p-6">
            <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold mb-2">Engajamento na Escola</p>
            <p className="text-3xl font-bold tracking-tight text-primary">75%</p>
            <p className="text-xs text-white/60 mt-2">Membros ativos em cursos</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-white/10">
          <CardContent className="p-6">
            <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold mb-2">Cursos Concluídos</p>
            <p className="text-3xl font-bold tracking-tight text-secondary">12</p>
            <p className="text-xs text-white/60 mt-2">Neste mês</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-white/10">
          <CardContent className="p-6">
            <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold mb-2">Recomendações</p>
            <p className="text-3xl font-bold tracking-tight text-primary">{recommendations.length}</p>
            <p className="text-xs text-white/60 mt-2">Feitas por você</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-zinc-900 border-white/10">
        <CardHeader>
          <CardTitle>Progresso dos Membros</CardTitle>
          <CardDescription>Acompanhe o desenvolvimento da sua célula e recomende cursos.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {members.map(member => {
              const progress = getMemberProgress(member.id);
              const memberRecommendations = recommendations.filter(r => r.memberId === member.id);
              return (
                <div key={member.id} className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10 border border-white/10">
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold">{member.name}</p>
                      <p className="text-xs text-white/60">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 max-w-xs w-full">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/60">Progresso Geral</span>
                      <span className="font-bold">{progress}%</span>
                    </div>
                    <div className="h-2 bg-black rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-white/10" onClick={() => { setSelectedMember(member.id); setShowRecommendModal(true); }}>
                      <Plus className="mr-2 h-4 w-4" /> Recomendar Curso
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function CellManagementView({ isLeader }: { isLeader: boolean }) {
  const [activeSubTab, setActiveSubTab] = React.useState("dashboard")
  const [showQrCode, setShowQrCode] = React.useState(false)
  const [showAttendance, setShowAttendance] = React.useState(false)
  const [isCreatingPost, setIsCreatingPost] = React.useState(false)
  const [feedTab, setFeedTab] = React.useState("geral")
  const [postContent, setPostContent] = React.useState("")
  const [postVideoUrl, setPostVideoUrl] = React.useState("")
  const [currentDate, setCurrentDate] = React.useState(new Date())
  const [showModal, setShowModal] = React.useState<string | null>(null)
  const [attendanceSaved, setAttendanceSaved] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("");

  const { members, tasks, categories, events, posts, materials, visitors, finances, prayers, reports, setCategories, generateScale, takeTask, untakeTask, addTask, addEvent, addPost, updatePost, addMaterial, addVisitor, addMember, addFinance } = useCell();
  const [newCategory, setNewCategory] = React.useState("");
  const [newTask, setNewTask] = React.useState({ title: '', description: '', category: 'Louvor', assignee: null as string | null, column: 'Próximo Encontro (15/04)' });
  const [newEvent, setNewEvent] = React.useState({ title: '', date: '', time: '', location: '', description: '', targetAudience: 'Toda a Célula' });
  const [newMaterial, setNewMaterial] = React.useState({ title: '', type: 'PDF', description: '' });
  const [newVisitor, setNewVisitor] = React.useState({ name: '', phone: '', date: new Date().toISOString().split('T')[0], status: 'Novo' });
  const [newMember, setNewMember] = React.useState({ name: '', phone: '', address: '', role: 'Membro', availability: [] as string[] });
  const [newFinance, setNewFinance] = React.useState({ type: 'Entrada (Receita)', amount: '', date: new Date().toISOString().split('T')[0], description: '' });

  const handleTakeTask = (taskId: number) => {
    takeTask(taskId, 'Você');
  };

  const handleUntakeTask = (taskId: number) => {
    untakeTask(taskId);
  };

  const handleGenerateScale = () => {
    generateScale();
  };

  const handleModalSubmit = () => {
    if (showModal === 'task') {
      if (!newTask.title) return;
      addTask(newTask);
      setNewTask({ title: '', description: '', category: 'Louvor', assignee: null, column: 'Próximo Encontro (15/04)' });
    } else if (showModal === 'event') {
      if (!newEvent.title) return;
      addEvent(newEvent);
      setNewEvent({ title: '', date: '', time: '', location: '', description: '', targetAudience: 'Toda a Célula' });
    } else if (showModal === 'material') {
      if (!newMaterial.title) return;
      addMaterial(newMaterial);
      setNewMaterial({ title: '', type: 'PDF', description: '' });
    } else if (showModal === 'visitor') {
      if (!newVisitor.name) return;
      addVisitor(newVisitor);
      setNewVisitor({ name: '', phone: '', date: new Date().toISOString().split('T')[0], status: 'Novo' });
    } else if (showModal === 'member') {
      if (!newMember.name) return;
      addMember(newMember);
      setNewMember({ name: '', phone: '', address: '', role: 'Membro', availability: [] });
    } else if (showModal === 'finance') {
      if (!newFinance.amount || !newFinance.description) return;
      addFinance({ ...newFinance, amount: parseFloat(newFinance.amount) });
      setNewFinance({ type: 'Entrada (Receita)', amount: '', date: new Date().toISOString().split('T')[0], description: '' });
    }
    handleAction('Salvo com sucesso');
    setShowModal(null);
  };

  const handlePost = () => {
    if (!postContent.trim() && !postVideoUrl.trim()) return;
    const newPost = {
      author: "Você",
      type: feedTab === "geral" ? "Atualização" : feedTab === "oracoes" ? "Oração" : feedTab === "galeria" ? "Galeria" : "Aviso",
      time: "Agora",
      content: postContent,
      video: postVideoUrl ? postVideoUrl.replace("watch?v=", "embed/") : undefined,
      likes: 0,
      comments: 0,
      liked: false
    };
    addPost(newPost);
    setPostContent("");
    setPostVideoUrl("");
    setIsCreatingPost(false);
  };

  const toggleLike = (id: number) => {
    const post = posts.find(p => p.id === id);
    if (post) {
      updatePost({ ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 });
    }
  };

  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  const handleSaveAttendance = () => {
    setAttendanceSaved(true);
    setTimeout(() => {
      setAttendanceSaved(false);
      setShowAttendance(false);
    }, 2000);
  };

  const handleAction = (action: string) => {
    alert(`Ação executada: ${action}`);
  };

  return (
    <div className="space-y-8">
      <AnimatePresence>
        {showQrCode && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQrCode(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md glass-card p-8 rounded-[2.5rem] space-y-6 text-center"
            >
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setShowQrCode(false)}
                className="absolute top-4 right-4 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </Button>
              
              <Tabs defaultValue="arrived" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6 bg-black/50 border border-white/10 rounded-full p-1">
                  <TabsTrigger value="arrived" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-black">Já Cheguei</TabsTrigger>
                  <TabsTrigger value="prospective" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-black">Quero Visitar</TabsTrigger>
                </TabsList>
                
                <TabsContent value="arrived" className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black font-serif italic text-white">Bem-vindo à Célula!</h3>
                    <p className="text-sm text-white/60">Que alegria ter você aqui. Escaneie para registrar sua presença.</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl aspect-square flex items-center justify-center mx-auto max-w-[200px]">
                    <QRCode value="https://igrejacoroado.com.br/visitante/celula-esperanca/cheguei" className="w-full h-full" />
                  </div>
                  <div className="text-xs text-white/40">
                    Instruções: Abra a câmera do seu celular e aponte para o código acima.
                  </div>
                </TabsContent>
                
                <TabsContent value="prospective" className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black font-serif italic text-white">Convide um Amigo</h3>
                    <p className="text-sm text-white/60">Compartilhe este QR Code para convidar alguém para nossa célula.</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl aspect-square flex items-center justify-center mx-auto max-w-[200px]">
                    <QRCode value="https://igrejacoroado.com.br/visitante/celula-esperanca/convite" className="w-full h-full" />
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primary text-black font-bold rounded-full" onClick={() => handleAction('Compartilhar QR Code')}>
                      <Share2 className="mr-2 h-4 w-4" /> Compartilhar
                    </Button>
                    <Button variant="outline" className="flex-1 border-white/10 rounded-full" onClick={() => handleAction('Baixar Card Instagram')}>
                      <Download className="mr-2 h-4 w-4" /> Card Instagram
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        )}

        {showAttendance && isLeader && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAttendance(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg glass-card p-8 rounded-[2.5rem] space-y-6 max-h-[80vh] flex flex-col"
            >
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setShowAttendance(false)}
                className="absolute top-4 right-4 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </Button>
              <div className="space-y-4 shrink-0">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black font-serif italic text-white">Chamada da Célula</h3>
                  <p className="text-sm text-white/60">Registre a presença dos membros no encontro.</p>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-wider">Selecione o Evento</label>
                  <select className="w-full h-12 bg-zinc-900 border border-white/10 rounded-xl px-4 text-white focus:ring-primary focus:border-primary outline-none">
                    <option value="encontro-hoje">Encontro da Célula (Hoje, 20:00)</option>
                    <option value="culto-domingo">Culto de Celebração (Domingo, 18:00)</option>
                    <option value="discipulado">Discipulado (Ontem)</option>
                  </select>
                </div>
              </div>
              <ScrollArea className="flex-1 -mx-4 px-4">
                <div className="space-y-2">
                  {members.map((member, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-sm">{member.name}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0 rounded-full border-white/10 hover:bg-green-500/20 hover:text-green-400 hover:border-green-500/50">
                          <CheckCircle2 className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0 rounded-full border-white/10 hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/50">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="shrink-0 pt-4 border-t border-white/10">
                {attendanceSaved ? (
                  <div className="w-full h-12 bg-green-500/20 text-green-400 font-bold rounded-full flex items-center justify-center">
                    <CheckCircle2 className="mr-2 h-5 w-5" /> Chamada Salva com Sucesso!
                  </div>
                ) : (
                  <Button className="w-full h-12 bg-primary text-black font-bold rounded-full" onClick={handleSaveAttendance}>
                    Salvar Chamada
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        )}

        {/* Generic Modal for Forms */}
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowModal(null)} className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg glass-card p-8 rounded-[2.5rem] space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <Button variant="ghost" size="icon" onClick={() => setShowModal(null)} className="absolute top-4 right-4 rounded-full hover:bg-white/10">
                <X className="w-5 h-5" />
              </Button>
              <h3 className="text-2xl font-black font-serif italic text-white">
                {showModal === 'event' && 'Novo Evento'}
                {showModal === 'task' && 'Nova Tarefa'}
                {showModal === 'categories' && 'Gerenciar Categorias'}
                {showModal === 'material' && 'Novo Material'}
                {showModal === 'member' && 'Adicionar Membro'}
                {showModal === 'visitor' && 'Novo Visitante'}
                {showModal === 'finance' && 'Nova Transação'}
              </h3>
              
              <div className="space-y-4">
                {showModal === 'categories' ? (
                  <>
                    <div className="flex gap-2">
                      <Input value={newCategory} onChange={e => setNewCategory(e.target.value)} placeholder="Nova categoria..." className="bg-zinc-900 border-white/10" />
                      <Button onClick={() => { if(newCategory) { setCategories([...categories, newCategory]); setNewCategory(""); } }} className="bg-primary text-black font-bold">Adicionar</Button>
                    </div>
                    <div className="space-y-2 mt-4 max-h-[40vh] overflow-y-auto">
                      {categories.map((cat, i) => (
                        <div key={i} className="flex justify-between items-center p-3 bg-zinc-900 border border-white/10 rounded-lg">
                          <span>{cat}</span>
                          <Button variant="ghost" size="sm" onClick={() => setCategories(categories.filter(c => c !== cat))} className="text-red-400 hover:text-red-300 hover:bg-red-400/10"><X className="h-4 w-4" /></Button>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/40 uppercase">Título / Nome</label>
                      <Input 
                        className="bg-zinc-900 border-white/10" 
                        placeholder="Digite aqui..." 
                        value={showModal === 'task' ? newTask.title : showModal === 'event' ? newEvent.title : undefined}
                        onChange={e => {
                          if (showModal === 'task') setNewTask({...newTask, title: e.target.value});
                          if (showModal === 'event') setNewEvent({...newEvent, title: e.target.value});
                        }}
                      />
                    </div>
                    {showModal === 'event' && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Data</label><Input type="date" className="bg-zinc-900 border-white/10" value={newEvent.date} onChange={e => setNewEvent({...newEvent, date: e.target.value})} /></div>
                      <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Hora</label><Input type="time" className="bg-zinc-900 border-white/10" value={newEvent.time} onChange={e => setNewEvent({...newEvent, time: e.target.value})} /></div>
                    </div>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Local</label><Input className="bg-zinc-900 border-white/10" placeholder="Endereço ou Link" value={newEvent.location} onChange={e => setNewEvent({...newEvent, location: e.target.value})} /></div>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Descrição</label><textarea className="w-full bg-zinc-900 border border-white/10 rounded-md p-3 min-h-[80px]" placeholder="Detalhes do evento..." value={newEvent.description} onChange={e => setNewEvent({...newEvent, description: e.target.value})} /></div>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Público Alvo</label><select className="w-full h-10 bg-zinc-900 border border-white/10 rounded-md px-3 text-white" value={newEvent.targetAudience} onChange={e => setNewEvent({...newEvent, targetAudience: e.target.value})}><option>Toda a Célula</option><option>Apenas Líderes</option><option>Visitantes</option></select></div>
                  </>
                )}
                {showModal === 'task' && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-white/40 uppercase">Categoria</label>
                        <select 
                          className="w-full h-10 bg-zinc-900 border border-white/10 rounded-md px-3 text-white"
                          value={newTask.category}
                          onChange={e => setNewTask({...newTask, category: e.target.value})}
                        >
                          {categories.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-white/40 uppercase">Coluna</label>
                        <select 
                          className="w-full h-10 bg-zinc-900 border border-white/10 rounded-md px-3 text-white"
                          value={newTask.column}
                          onChange={e => setNewTask({...newTask, column: e.target.value})}
                        >
                          <option value="Próximo Encontro (15/04)">Próximo Encontro (15/04)</option>
                          <option value="Encontro (22/04)">Encontro (22/04)</option>
                          <option value="Geral">Geral</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/40 uppercase">Responsável (Opcional)</label>
                      <select 
                        className="w-full h-10 bg-zinc-900 border border-white/10 rounded-md px-3 text-white"
                        value={newTask.assignee || ""}
                        onChange={e => setNewTask({...newTask, assignee: e.target.value || null})}
                      >
                        <option value="">Deixar em aberto</option>
                        <option value="Maria Costa">Maria Costa</option>
                        <option value="João Silva">João Silva</option>
                        <option value="Você">Você</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/40 uppercase">Descrição Detalhada</label>
                      <textarea 
                        className="w-full bg-zinc-900 border border-white/10 rounded-md p-3 min-h-[100px]" 
                        placeholder="Instruções específicas para quem assumir a tarefa..." 
                        value={newTask.description}
                        onChange={e => setNewTask({...newTask, description: e.target.value})}
                      />
                    </div>
                  </>
                )}
                {showModal === 'material' && (
                  <>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/40 uppercase">Título / Nome</label>
                      <Input className="bg-zinc-900 border-white/10" placeholder="Digite aqui..." value={newMaterial.title} onChange={e => setNewMaterial({...newMaterial, title: e.target.value})} />
                    </div>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Tipo de Material</label><select className="w-full h-10 bg-zinc-900 border border-white/10 rounded-md px-3 text-white" value={newMaterial.type} onChange={e => setNewMaterial({...newMaterial, type: e.target.value})}><option>PDF</option><option>Vídeo</option><option>Link Externo</option><option>Livro</option></select></div>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Link / Arquivo</label><Input className="bg-zinc-900 border-white/10" placeholder="URL ou clique para upload" /></div>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Descrição</label><textarea className="w-full bg-zinc-900 border border-white/10 rounded-md p-3 min-h-[80px]" placeholder="Sobre o que é este material?" value={newMaterial.description} onChange={e => setNewMaterial({...newMaterial, description: e.target.value})} /></div>
                  </>
                )}
                {showModal === 'member' && (
                  <>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/40 uppercase">Nome do Membro</label>
                      <Input className="bg-zinc-900 border-white/10" placeholder="Nome completo" value={newMember.name} onChange={e => setNewMember({...newMember, name: e.target.value})} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Telefone / WhatsApp</label><Input className="bg-zinc-900 border-white/10" placeholder="(00) 00000-0000" value={newMember.phone} onChange={e => setNewMember({...newMember, phone: e.target.value})} /></div>
                      <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Data de Nascimento</label><Input type="date" className="bg-zinc-900 border-white/10" /></div>
                    </div>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Endereço Completo</label><Input className="bg-zinc-900 border-white/10" placeholder="Rua, Número, Bairro" value={newMember.address} onChange={e => setNewMember({...newMember, address: e.target.value})} /></div>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Função na Célula</label><select className="w-full h-10 bg-zinc-900 border border-white/10 rounded-md px-3 text-white" value={newMember.role} onChange={e => setNewMember({...newMember, role: e.target.value})}><option>Membro</option><option>Líder em Treinamento</option><option>Anfitrião</option></select></div>
                  </>
                )}
                {showModal === 'visitor' && (
                  <>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/40 uppercase">Nome do Visitante</label>
                      <Input className="bg-zinc-900 border-white/10" placeholder="Nome completo" value={newVisitor.name} onChange={e => setNewVisitor({...newVisitor, name: e.target.value})} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Telefone / WhatsApp</label><Input className="bg-zinc-900 border-white/10" placeholder="(00) 00000-0000" value={newVisitor.phone} onChange={e => setNewVisitor({...newVisitor, phone: e.target.value})} /></div>
                      <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Data da Visita</label><Input type="date" className="bg-zinc-900 border-white/10" value={newVisitor.date} onChange={e => setNewVisitor({...newVisitor, date: e.target.value})} /></div>
                    </div>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Como nos conheceu?</label><select className="w-full h-10 bg-zinc-900 border border-white/10 rounded-md px-3 text-white"><option>Convidado por um membro</option><option>Redes Sociais</option><option>Mora perto</option><option>Outros</option></select></div>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Quem convidou? (Opcional)</label><Input className="bg-zinc-900 border-white/10" placeholder="Nome do membro" /></div>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Pedidos de Oração / Observações</label><textarea className="w-full bg-zinc-900 border border-white/10 rounded-md p-3 min-h-[80px]" placeholder="Algo especial que precisamos saber?" /></div>
                  </>
                )}
                {showModal === 'finance' && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Tipo</label><select className="w-full h-10 bg-zinc-900 border border-white/10 rounded-md px-3 text-white" value={newFinance.type} onChange={e => setNewFinance({...newFinance, type: e.target.value})}><option>Entrada (Receita)</option><option>Saída (Despesa)</option></select></div>
                      <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Valor (R$)</label><Input type="number" step="0.01" className="bg-zinc-900 border-white/10" placeholder="0,00" value={newFinance.amount} onChange={e => setNewFinance({...newFinance, amount: e.target.value})} /></div>
                    </div>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Data</label><Input type="date" className="bg-zinc-900 border-white/10" value={newFinance.date} onChange={e => setNewFinance({...newFinance, date: e.target.value})} /></div>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Descrição / Observação</label><textarea className="w-full bg-zinc-900 border border-white/10 rounded-md p-3 min-h-[80px]" placeholder="Detalhes da transação..." value={newFinance.description} onChange={e => setNewFinance({...newFinance, description: e.target.value})} /></div>
                  </>
                )}
                <Button className="w-full bg-primary text-black font-bold mt-4" onClick={handleModalSubmit}>Salvar</Button>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Célula Esperança</h1>
          <p className="text-white/60">Gestão e acompanhamento da nossa família.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-white/10" onClick={() => setShowQrCode(true)}>
            <QrCode className="mr-2 h-4 w-4" />
            QR Code Visitante
          </Button>
          {isLeader && (
            <Button className="bg-primary text-black" onClick={() => setShowAttendance(true)}>
              <CheckSquare className="mr-2 h-4 w-4" />
              Fazer Chamada
            </Button>
          )}
        </div>
      </div>

      <Tabs value={activeSubTab} onValueChange={setActiveSubTab} className="space-y-8">
        <ScrollArea className="w-full whitespace-nowrap pb-4">
          <TabsList className="bg-zinc-900 border border-white/10 p-1 rounded-full inline-flex w-max">
            <TabsTrigger value="dashboard" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Início</TabsTrigger>
            <TabsTrigger value="feed" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Feed da Célula</TabsTrigger>
            <TabsTrigger value="agenda" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Agenda</TabsTrigger>
            <TabsTrigger value="tasks" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Tarefas</TabsTrigger>
            <TabsTrigger value="growth" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Crescimento</TabsTrigger>
            <TabsTrigger value="members" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Membros</TabsTrigger>
            {isLeader && (
              <>
                <TabsTrigger value="panel" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Painel do Líder</TabsTrigger>
                <TabsTrigger value="school" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Escola IDE</TabsTrigger>
                <TabsTrigger value="visitors" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Visitantes</TabsTrigger>
                <TabsTrigger value="finance" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Financeiro</TabsTrigger>
              </>
            )}
          </TabsList>
        </ScrollArea>

        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-zinc-900 border-white/10 cursor-pointer hover:border-primary/50 transition-colors" onClick={() => setActiveSubTab('agenda')}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                  Próximo Encontro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                  {events.length > 0 ? (
                    <>
                      <p className="text-white/60">{events[0].date} às {events[0].time}</p>
                      <p className="font-bold mt-1">Tema: {events[0].title}</p>
                    </>
                  ) : (
                    <p className="text-white/60">Nenhum encontro agendado</p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-white/10 cursor-pointer hover:border-secondary/50 transition-colors" onClick={() => setActiveSubTab('feed')}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Gift className="h-5 w-5 text-secondary" />
                  Aniversariantes do Mês
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-sm">Maria Costa</p>
                      <p className="text-xs text-white/60">Dia 15</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary" onClick={(e) => { e.stopPropagation(); handleAction('Parabenizar Maria Costa'); }}>Parabenizar</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-zinc-900 border-white/10 cursor-pointer hover:border-red-400/50 transition-colors" onClick={() => { setActiveSubTab('feed'); setFeedTab('oracoes'); }}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Heart className="h-5 w-5 text-red-400" />
                  Pedidos de Oração
                </CardTitle>
                <Button variant="link" className="text-primary text-xs" onClick={(e) => { e.stopPropagation(); setActiveSubTab('feed'); setFeedTab('oracoes'); }}>Ver Todos</Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {prayers.slice(0, 2).map((item, i) => (
                  <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <p className="font-bold text-sm">Pedido de Oração</p>
                    <p className="text-sm text-white/60 mt-1">{item.reason}</p>
                  </div>
                ))}
                {prayers.length === 0 && (
                  <p className="text-sm text-white/40 text-center py-4">Nenhum pedido de oração.</p>
                )}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-zinc-900 border-white/10 cursor-pointer hover:border-primary/50 transition-colors" onClick={() => setActiveSubTab('tasks')}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <ListTodo className="h-5 w-5 text-primary" />
                    Tarefas do Encontro
                  </CardTitle>
                  <Badge className="bg-primary/20 text-primary border-none">{tasks.filter(t => !t.assignee).length} Pendentes</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/60">
                    {tasks.filter(t => !t.assignee).length > 0 
                      ? `Precisamos de voluntários para: ${tasks.filter(t => !t.assignee).map(t => t.category).join(', ')}.`
                      : 'Todas as tarefas já têm responsáveis!'}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-white/10 cursor-pointer hover:border-secondary/50 transition-colors" onClick={() => setActiveSubTab('members')}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-secondary" />
                    Nossa Família
                  </CardTitle>
                  <Badge variant="outline" className="border-white/10 text-white/60">{members.length} Membros</Badge>
                </CardHeader>
                <CardContent>
                  <div className="flex -space-x-2">
                    {members.slice(0, 5).map((m, i) => (
                      <Avatar key={i} className="border-2 border-zinc-900 h-8 w-8">
                        <AvatarFallback>{m.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    ))}
                    {members.length > 5 && (
                      <div className="h-8 w-8 rounded-full bg-white/10 border-2 border-zinc-900 flex items-center justify-center text-xs font-bold">+{members.length - 5}</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="feed" className="space-y-6">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-3xl font-black font-serif italic">Feed da Célula</h2>
            <p className="text-white/60">Acompanhe tudo que acontece na nossa família.</p>
          </div>

          <Card className="bg-zinc-900 border-white/10 overflow-hidden">
            <div className="flex border-b border-white/10 overflow-x-auto">
              <Button variant="ghost" onClick={() => setFeedTab('geral')} className={`flex-1 rounded-none border-b-2 ${feedTab === 'geral' ? 'border-primary text-primary font-bold' : 'border-transparent text-white/60 hover:text-white'}`}>Geral</Button>
              <Button variant="ghost" onClick={() => setFeedTab('oracoes')} className={`flex-1 rounded-none border-b-2 ${feedTab === 'oracoes' ? 'border-primary text-primary font-bold' : 'border-transparent text-white/60 hover:text-white'}`}>Orações</Button>
              <Button variant="ghost" onClick={() => setFeedTab('galeria')} className={`flex-1 rounded-none border-b-2 ${feedTab === 'galeria' ? 'border-primary text-primary font-bold' : 'border-transparent text-white/60 hover:text-white'}`}>Galeria</Button>
              <Button variant="ghost" onClick={() => setFeedTab('avisos')} className={`flex-1 rounded-none border-b-2 ${feedTab === 'avisos' ? 'border-primary text-primary font-bold' : 'border-transparent text-white/60 hover:text-white'}`}>Avisos</Button>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarFallback>EU</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-4">
                  <textarea 
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    placeholder={feedTab === 'oracoes' ? "Compartilhe um pedido de oração..." : "O que você quer compartilhar com a célula?"} 
                    className={`w-full bg-transparent border-none resize-none focus:ring-0 text-lg placeholder:text-white/40 transition-all outline-none ${isCreatingPost ? 'min-h-[120px]' : 'min-h-[40px]'}`}
                    onFocus={() => setIsCreatingPost(true)}
                  />
                  
                  <AnimatePresence>
                    {isCreatingPost && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 overflow-hidden"
                      >
                        <div className="p-4 rounded-xl border border-white/10 bg-black/20 space-y-3">
                          <Input 
                            placeholder="Cole o link do YouTube aqui..." 
                            className="bg-transparent border-white/10" 
                            value={postVideoUrl}
                            onChange={(e) => setPostVideoUrl(e.target.value)}
                          />
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="border-white/10" onClick={() => handleAction('Vincular Evento')}><Calendar className="h-4 w-4 mr-2" /> Vincular Evento</Button>
                            <span className="text-xs text-white/40">Nenhum evento selecionado</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-white/60 hover:text-primary rounded-full" onClick={() => handleAction('Adicionar Foto')}>
                        <ImageIcon className="h-4 w-4 mr-2" /> Foto
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white/60 hover:text-primary rounded-full" onClick={() => setIsCreatingPost(true)}>
                        <Youtube className="h-4 w-4 mr-2" /> Vídeo
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white/60 hover:text-primary rounded-full" onClick={() => handleAction('Adicionar Arquivo')}>
                        <Paperclip className="h-4 w-4 mr-2" /> Arquivo
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      {isCreatingPost && (
                        <Button variant="ghost" className="rounded-full" onClick={() => setIsCreatingPost(false)}>Cancelar</Button>
                      )}
                      <Button className="bg-primary text-black rounded-full px-6 font-bold" onClick={handlePost}>Publicar</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {posts.filter(p => feedTab === 'geral' || p.type.toLowerCase() === feedTab || (feedTab === 'oracoes' && p.type === 'Oração')).map((post) => (
              <Card key={post.id} className="bg-zinc-900 border-white/10">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{post.author.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold">{post.author}</p>
                        <p className="text-xs text-white/40">{post.time} • {post.type}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-white/40 hover:text-white"><MoreVertical className="h-4 w-4" /></Button>
                  </div>
                  <p className="text-white/80 whitespace-pre-wrap">{post.content}</p>
                  
                  {post.video && (
                    <div className="rounded-xl overflow-hidden border border-white/10 relative aspect-video bg-black">
                      <iframe src={post.video} className="w-full h-full" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                    </div>
                  )}
                  
                  {post.images && (
                    <div className={`grid gap-2 rounded-xl overflow-hidden ${post.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                      {post.images.map((img, idx) => (
                        <img key={idx} src={img} alt="Post image" className="w-full h-48 object-cover" />
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <Button variant="ghost" size="sm" className={`${post.liked ? 'text-red-500' : 'text-white/60 hover:text-red-500'}`} onClick={() => toggleLike(post.id)}>
                      <Heart className={`mr-2 h-4 w-4 ${post.liked ? 'fill-current' : ''}`} /> {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white/60 hover:text-primary" onClick={() => handleAction('Comentar')}>
                      <MessageSquare className="mr-2 h-4 w-4" /> {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white/60 hover:text-primary ml-auto" onClick={() => handleAction('Compartilhar Post')}>
                      <Share2 className="mr-2 h-4 w-4" /> Compartilhar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="agenda" className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold font-serif italic">Agenda da Célula</h3>
            {isLeader && <Button className="bg-primary text-black rounded-full" onClick={() => setShowModal('event')}><Plus className="mr-2 h-4 w-4" /> Novo Evento</Button>}
          </div>
          
          <Tabs defaultValue="calendar" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-6 bg-black/50 border border-white/10 rounded-full p-1">
              <TabsTrigger value="calendar" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-black">Visão Calendário</TabsTrigger>
              <TabsTrigger value="list" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-black">Lista de Eventos</TabsTrigger>
            </TabsList>

            <TabsContent value="calendar" className="space-y-4">
              <Card className="bg-zinc-900 border-white/10">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-white/10" onClick={prevMonth}><ChevronRight className="h-4 w-4 rotate-180" /></Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-white/10" onClick={nextMonth}><ChevronRight className="h-4 w-4" /></Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-2 text-center mb-2">
                    {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                      <div key={day} className="text-xs font-bold text-white/40 uppercase">{day}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate() }).map((_, i) => {
                      const day = i + 1;
                      const isToday = day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear();
                      const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                      const dayEvents = events.filter(e => e.date === dateStr);
                      const hasEvent = dayEvents.length > 0;
                      return (
                        <div 
                          key={i} 
                          onClick={() => hasEvent && handleAction(`Ver eventos do dia ${day}: ${dayEvents.map(e => e.title).join(', ')}`)}
                          className={`aspect-square rounded-xl border flex flex-col items-center justify-center relative cursor-pointer transition-colors
                            ${isToday ? 'bg-primary text-black border-primary font-bold' : 'bg-white/5 border-white/5 hover:border-primary/50 text-white/80'}
                          `}
                        >
                          <span>{day}</span>
                          {hasEvent && (
                            <div className={`absolute bottom-2 w-1.5 h-1.5 rounded-full ${isToday ? 'bg-black' : 'bg-primary'}`} />
                          )}
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="list" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                {events.map((event, i) => (
                  <Card key={i} className="bg-zinc-900 border-white/10">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <Badge className="bg-primary/10 text-primary border-none">{event.targetAudience}</Badge>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{event.title}</h4>
                        <div className="space-y-2 mt-4 text-white/60 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" /> {event.date} às {event.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" /> {event.location}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold font-serif italic">Tarefas da Célula</h3>
              <p className="text-white/60">Organize quem faz o que nos nossos encontros.</p>
            </div>
            {isLeader && (
              <div className="flex gap-2">
                <Button variant="outline" className="border-white/10" onClick={() => setShowModal('categories')}><Settings className="mr-2 h-4 w-4" /> Categorias</Button>
                <Button variant="secondary" className="text-black rounded-full" onClick={handleGenerateScale}><RefreshCw className="mr-2 h-4 w-4" /> Gerar Escala</Button>
                <Button className="bg-primary text-black rounded-full" onClick={() => setShowModal('task')}><Plus className="mr-2 h-4 w-4" /> Nova Tarefa</Button>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Task Categories/Columns */}
            {['Próximo Encontro (15/04)', 'Encontro (22/04)', 'Geral'].map((col, i) => (
              <div key={i} className="space-y-4">
                <h4 className="font-bold text-lg border-b border-white/10 pb-2">{col}</h4>
                
                {tasks.filter(t => t.column === col).map((task) => (
                  <Card key={task.id} className={`bg-zinc-900 border-white/10 transition-colors ${task.assignee ? 'opacity-70' : 'hover:border-primary/50'}`}>
                    <CardContent className="p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <Badge className={`${task.assignee ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} border-none`}>{task.category}</Badge>
                        {task.assignee ? (
                          <CheckCircle2 className="h-5 w-5 text-primary cursor-pointer" onClick={() => handleUntakeTask(task.id)} />
                        ) : (
                          <Button variant="ghost" size="icon" className="h-6 w-6 text-white/40"><MoreVertical className="h-4 w-4" /></Button>
                        )}
                      </div>
                      <div>
                        <p className={`font-bold ${task.assignee ? 'line-through text-white/60' : ''}`}>{task.title}</p>
                        {!task.assignee && <p className="text-xs text-white/60 mt-1">{task.description}</p>}
                      </div>
                      <div className="pt-3 border-t border-white/5 flex justify-between items-center">
                        {task.assignee ? (
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback className="text-[10px]">{task.assignee.substring(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <span className="text-xs font-medium text-white/60">{task.assignee} (Preenchida)</span>
                          </div>
                        ) : (
                          <>
                            <span className="text-xs font-bold text-white/40 uppercase">Disponível</span>
                            <Button size="sm" className="h-8 bg-white/10 hover:bg-primary hover:text-black" onClick={() => handleTakeTask(task.id)}>Eu Sirvo!</Button>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="growth" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold font-serif italic">Crescimento</h3>
              <p className="text-white/60">Materiais de estudo, livros e devocionais para a célula.</p>
            </div>
            {isLeader && <Button className="bg-primary text-black rounded-full" onClick={() => setShowModal('material')}><Plus className="mr-2 h-4 w-4" /> Novo Material</Button>}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((item, i) => (
              <Card key={i} className="bg-zinc-900 border-white/10 hover:border-primary/50 transition-colors cursor-pointer group" onClick={() => handleAction(`Acessar ${item.title}`)}>
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {item.type === 'PDF' ? <FileText className="h-6 w-6" /> : item.type === 'Livro' ? <BookOpen className="h-6 w-6" /> : <Video className="h-6 w-6" />}
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2 border-white/10">{item.type}</Badge>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-sm text-white/60 mt-1">{item.description}</p>
                  </div>
                  <Button variant="ghost" className="w-full justify-start p-0 text-primary hover:text-primary hover:bg-transparent">
                    Acessar Material <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="members" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold font-serif italic">Membros da Célula</h3>
              <p className="text-white/60">Conheça nossa família e onde cada um mora.</p>
            </div>
            {isLeader && <Button className="bg-primary text-black rounded-full" onClick={() => setShowModal('member')}><UserPlus className="mr-2 h-4 w-4" /> Adicionar Membro</Button>}
          </div>

          <div className="space-y-6">
            <Card className="bg-zinc-900 border-white/10 overflow-hidden h-[400px] flex flex-col">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Mapa da Célula
                </CardTitle>
              </CardHeader>
              <div className="flex-1 relative bg-zinc-800">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.206411545645!2d-40.5055!3d-20.6695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQwJzEwLjIiUyA0MMKwMzAnMTkuOCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full grayscale contrast-125 invert brightness-90"
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-bold text-white/80">Local do Encontro: Casa da Maria</p>
                    <p className="text-xs text-white/40 mt-1">5 membros moram num raio de 2km</p>
                  </div>
                  <Button variant="outline" size="sm" className="border-white/10 text-xs">Ver Detalhes</Button>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                <Input 
                  placeholder="Buscar membro..." 
                  className="pl-12 h-12 bg-zinc-900 border-white/10 rounded-full text-md focus:ring-primary/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {members.filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()) || m.role.toLowerCase().includes(searchQuery.toLowerCase())).map((member, i) => (
                  <Card key={i} className="bg-zinc-900 border-white/10 hover:border-primary/50 transition-colors cursor-pointer" onClick={() => handleAction(`Ver perfil de ${member.name}`)}>
                    <CardContent className="p-4 flex items-center gap-4">
                      <Avatar className="h-12 w-12 border border-white/10">
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-bold">{member.name}</p>
                        <p className="text-xs text-white/60">{member.role}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="text-white/40 hover:text-primary" onClick={(e) => { e.stopPropagation(); handleAction(`Enviar mensagem para ${member.name}`); }}>
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="panel" className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Membros Ativos", value: members.length.toString(), trend: "Total na célula" },
              { label: "Engajamento", value: reports.length > 0 ? Math.round(reports.reduce((acc, r) => acc + r.present, 0) / reports.length / members.length * 100) + '%' : '0%', trend: "Presença média" },
              { label: "Visitantes", value: visitors.length.toString(), trend: "Total de visitantes" },
              { label: "Tarefas", value: tasks.filter(t => !t.assignee).length.toString(), trend: "Pendentes" },
            ].map((stat, i) => (
              <Card key={i} className="bg-zinc-900 border-white/10">
                <CardContent className="p-6">
                  <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold tracking-tight text-primary">{stat.value}</p>
                  <p className="text-xs text-white/60 mt-2">{stat.trend}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-zinc-900 border-white/10">
              <CardHeader>
                <CardTitle>Frequência nos Últimos Encontros</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={[
                      { name: 'Sem 1', presencas: 12 },
                      { name: 'Sem 2', presencas: 14 },
                      { name: 'Sem 3', presencas: 13 },
                      { name: 'Sem 4', presencas: 15 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                      <XAxis dataKey="name" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#18181b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Line type="monotone" dataKey="presencas" stroke="#c0ff00" strokeWidth={3} dot={{ fill: '#c0ff00', strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-white/10">
              <CardHeader>
                <CardTitle>Visitantes por Mês</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                      { name: 'Jan', novos: 4, consolidados: 2 },
                      { name: 'Fev', novos: 3, consolidados: 1 },
                      { name: 'Mar', novos: 6, consolidados: 3 },
                      { name: 'Abr', novos: 5, consolidados: 4 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                      <XAxis dataKey="name" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#18181b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                      <Bar dataKey="novos" name="Novos Visitantes" fill="#c0ff00" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="consolidados" name="Consolidados" fill="#22c55e" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-zinc-900 border-white/10">
              <CardHeader>
                <CardTitle>Saúde da Célula</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Frequência</span>
                    <span className="font-bold">85%</span>
                  </div>
                  <div className="h-2 bg-black rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Consolidação</span>
                    <span className="font-bold">40%</span>
                  </div>
                  <div className="h-2 bg-black rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[40%]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Recorrência</span>
                    <span className="font-bold">75%</span>
                  </div>
                  <div className="h-2 bg-black rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[75%]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-white/10">
              <CardHeader>
                <CardTitle>Ações Rápidas do Líder</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                <Button variant="outline" className="w-full justify-start border-white/10 hover:bg-white/5" onClick={() => setShowAttendance(true)}>
                  <CheckSquare className="mr-2 h-4 w-4 text-primary" />
                  Registrar Presença (Check-in)
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/10 hover:bg-white/5" onClick={() => setShowModal('visitor')}>
                  <UserPlus className="mr-2 h-4 w-4 text-primary" />
                  Cadastrar Novo Visitante
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/10 hover:bg-white/5" onClick={() => setShowModal('event')}>
                  <Calendar className="mr-2 h-4 w-4 text-primary" />
                  Agendar Evento Extra
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/10 hover:bg-white/5" onClick={() => handleAction('Gerenciar Permissões')}>
                  <Shield className="mr-2 h-4 w-4 text-primary" />
                  Gerenciar Permissões
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="school" className="space-y-6">
          <CellSchoolTab members={members} />
        </TabsContent>

        <TabsContent value="visitors" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-zinc-900 border-white/10">
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-primary">4</p>
                <p className="text-xs uppercase text-white/60 font-bold mt-1">Novos (Mês)</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-white/10">
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-secondary">2</p>
                <p className="text-xs uppercase text-white/60 font-bold mt-1">Em Consolidação</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-white/10">
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-primary">1</p>
                <p className="text-xs uppercase text-white/60 font-bold mt-1">Consolidados</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-zinc-900 border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Acompanhamento de Visitantes</CardTitle>
              <Button size="sm" className="bg-primary text-black" onClick={() => setShowModal('visitor')}>Novo Visitante</Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader className="border-white/10">
                  <TableRow className="hover:bg-transparent border-white/10">
                    <TableHead className="text-white/40">Nome</TableHead>
                    <TableHead className="text-white/40">Primeira Visita</TableHead>
                    <TableHead className="text-white/40">Status</TableHead>
                    <TableHead className="text-right text-white/40">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visitors.map((row, i) => (
                    <TableRow key={i} className="border-white/5 hover:bg-white/5">
                      <TableCell className="font-medium">{row.name}</TableCell>
                      <TableCell className="text-white/60">{row.date}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={row.status === "Novo" ? "border-secondary text-secondary" : "border-primary text-primary"}>
                          {row.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => handleAction(`Acompanhar ${row.name}`)}>Acompanhar</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="finance" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-zinc-900 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-white/5 text-primary">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-white/40">Este mês</span>
                </div>
                <p className="text-xs uppercase tracking-wider text-white/40 font-bold mb-1">Entradas</p>
                <p className="text-3xl font-bold tracking-tight text-primary">R$ {finances.filter(f => f.type === 'Entrada (Receita)').reduce((acc, curr) => acc + curr.amount, 0).toFixed(2).replace('.', ',')}</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-white/5 text-red-400">
                    <TrendingUp className="h-5 w-5 rotate-180" />
                  </div>
                  <span className="text-xs text-white/40">Este mês</span>
                </div>
                <p className="text-xs uppercase tracking-wider text-white/40 font-bold mb-1">Saídas</p>
                <p className="text-3xl font-bold tracking-tight text-red-400">R$ {finances.filter(f => f.type === 'Saída (Despesa)').reduce((acc, curr) => acc + curr.amount, 0).toFixed(2).replace('.', ',')}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-zinc-900 border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Histórico de Transações</CardTitle>
              <Button size="sm" className="bg-primary text-black" onClick={() => setShowModal('finance')}>Nova Transação</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {finances.map((tx, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-4">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${tx.type === 'Entrada (Receita)' ? 'bg-primary/10 text-primary' : 'bg-red-500/10 text-red-400'}`}>
                        <DollarSign className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold">{tx.description}</p>
                        <p className="text-xs text-white/40">{tx.date}</p>
                      </div>
                    </div>
                    <p className={`font-bold ${tx.type === 'Entrada (Receita)' ? 'text-primary' : 'text-red-400'}`}>
                      {tx.type === 'Entrada (Receita)' ? '+' : '-'} R$ {tx.amount.toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// ... rest of the components remain unchanged


function HomeView({ onTabChange }: { onTabChange: (tab: string) => void }) {
  const [selectedEvent, setSelectedEvent] = React.useState<any>(null);

  const ministries = [
    { name: "Louvor", desc: "Adoração que toca o céu e transforma a terra.", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop", tab: "social" },
    { name: "Kids", desc: "Investindo na próxima geração com amor e diversão.", img: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=800&auto=format&fit=crop", tab: "social" },
    { name: "Jovens", desc: "Uma juventude apaixonada por Jesus e relevante.", img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop", tab: "social" },
    { name: "Casais", desc: "Fortalecendo famílias através de relacionamentos.", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop", tab: "social" },
    { name: "Intercessão", desc: "O motor que move a igreja através da oração.", img: "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?q=80&w=800&auto=format&fit=crop", tab: "social" },
    { name: "Ação Social", desc: "Sendo as mãos e os pés de Jesus na cidade.", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop", tab: "social" },
    { name: "Ensino", desc: "Crescendo no conhecimento da Palavra de Deus.", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop", tab: "school" },
    { name: "Recepção", desc: "Acolhendo cada pessoa com o amor de Cristo.", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop", tab: "social" },
    { name: "Mídia", desc: "Comunicando o Evangelho através da tecnologia.", img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop", tab: "media" },
    { name: "Dança", desc: "Expressando adoração através do movimento.", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop", tab: "social" },
    { name: "Teatro", desc: "Contando a maior história de todos os tempos.", img: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=800&auto=format&fit=crop", tab: "social" },
    { name: "Missões", desc: "Levando a esperança de Jesus até os confins.", img: "https://images.unsplash.com/photo-1524061614234-84496375567e?q=80&w=800&auto=format&fit=crop", tab: "social" },
    { name: "Homens", desc: "Homens de valor, integridade e propósito.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop", tab: "social" },
    { name: "Mulheres", desc: "Mulheres virtuosas, fortes e cheias de graça.", img: "https://images.unsplash.com/photo-1485872222694-0618c4770727?q=80&w=800&auto=format&fit=crop", tab: "social" },
  ]

  const events = [
    { title: "Culto de Celebração", date: "Domingo, 18:00", loc: "Campus Guarapari", type: "Presencial", desc: "Venha celebrar conosco em uma noite de adoração, palavra e comunhão. Nossos cultos são abertos a todos!" },
    { title: "Escola IDE - Módulo 1", date: "Terça, 19:30", loc: "Online", type: "Ensino", desc: "Aprofunde seu conhecimento bíblico e cresça na sua jornada com Cristo através da nossa escola de líderes." },
    { title: "Noite de Adoração", date: "Sexta, 20:00", loc: "Campus Centro", type: "Especial", desc: "Uma noite dedicada exclusivamente à adoração e busca intensa pela presença de Deus." },
  ]

  return (
    <div className="space-y-20 pb-20">
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg glass-card p-8 md:p-12 rounded-[2.5rem] space-y-8"
            >
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 rounded-full hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </Button>
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-none font-bold px-4 py-1.5 rounded-full">{selectedEvent.type}</Badge>
                <h3 className="text-4xl font-black font-serif italic text-white leading-tight">{selectedEvent.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/60 font-medium">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 font-medium">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{selectedEvent.loc}</span>
                  </div>
                </div>
                <p className="text-lg text-white/60 leading-relaxed pt-4 border-t border-white/5">
                  {selectedEvent.desc}
                </p>
              </div>
              <Button className="w-full h-14 bg-primary text-black font-black rounded-full text-lg shadow-lg shadow-primary/20">
                Adicionar ao Calendário
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/10 p-8 md:p-20 min-h-[600px] flex items-center">
        <div className="relative z-10 max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1.5 rounded-full uppercase tracking-[0.2em] text-[10px] font-black bg-primary/5">
              Bem-vindo à Igreja Coroado
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            UM LUGAR PARA <br />
            <span className="text-primary italic font-light">PERTENCER</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/60 leading-relaxed max-w-xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Nós somos uma igreja em células, apaixonada por Jesus e comprometida em transformar vidas através do amor e do serviço.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              size="lg" 
              onClick={() => onTabChange("cell")}
              className="bg-primary text-black hover:bg-primary/90 rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
            >
              Encontrar uma Célula
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => document.getElementById('novo-aqui-modal')?.classList.remove('hidden')}
              className="border-primary/50 text-primary hover:bg-primary/10 rounded-full px-10 h-14 text-lg font-bold backdrop-blur-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Heart className="w-5 h-5" /> Novo Aqui?
            </Button>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full opacity-40 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1200&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Ministries Carousel */}
      <section className="space-y-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight font-serif italic">Nossos Ministérios</h2>
          <p className="text-white/50 text-lg">Descubra como você pode servir e crescer em nossa comunidade através dos nossos 14 ministérios ativos.</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {ministries.map((min, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900"
                >
                  <img 
                    src={min.img} 
                    alt={min.name} 
                    className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2">
                    <h3 className="text-2xl font-black font-serif italic text-primary">{min.name}</h3>
                    <p className="text-sm text-white/70 leading-relaxed font-medium">{min.desc}</p>
                    <Button 
                      variant="link" 
                      onClick={() => onTabChange(min.tab)}
                      className="text-white p-0 h-auto font-bold text-xs uppercase tracking-widest group-hover:text-primary transition-colors"
                    >
                      Saiba Mais <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 bg-white/5 border-white/10 hover:bg-primary hover:text-black" />
            <CarouselNext className="static translate-y-0 bg-white/5 border-white/10 hover:bg-primary hover:text-black" />
          </div>
        </Carousel>
      </section>

      {/* Upcoming Events */}
      <section className="space-y-10">
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-black tracking-tight font-serif italic">Agenda</h2>
            <p className="text-white/50">Não perca nada do que está acontecendo na Coroado.</p>
          </div>
          <Button variant="outline" className="rounded-full border-white/10 hover:bg-white/5 font-bold">Ver Calendário Completo</Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedEvent(event)}
              className="glass-card p-8 rounded-[2rem] space-y-6 cursor-pointer group"
            >
              <div className="flex justify-between items-start">
                <Badge className="bg-primary/10 text-primary border-none font-bold px-3 py-1 rounded-full">{event.type}</Badge>
                <Calendar className="h-5 w-5 text-white/20 group-hover:text-primary transition-colors" />
              </div>
              <div className="space-y-4">
                <h3 className="font-black text-2xl font-serif italic leading-tight group-hover:text-primary transition-colors">{event.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm text-white/50 font-medium">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/50 font-medium">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.loc}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NOVO AQUI MODAL */}
      <div id="novo-aqui-modal" className="fixed inset-0 z-[100] hidden">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={(e) => {
          if (e.target === e.currentTarget) {
            document.getElementById('novo-aqui-modal')?.classList.add('hidden');
          }
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg glass-card p-8 rounded-[2.5rem] flex flex-col items-center text-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => document.getElementById('novo-aqui-modal')?.classList.add('hidden')}
            className="absolute top-6 right-6 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </Button>
          
          <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
            <Heart className="w-8 h-8" />
          </div>
          
          <h3 className="text-3xl font-black font-serif italic mb-2">Bem-vindo à Família!</h3>
          <p className="text-white/60 mb-8 max-w-sm">
            Que alegria ter você com a gente. Preencha rapidinho para te conhecermos melhor e conectarmos você a uma célula perto de casa!
          </p>

          <div className="w-full space-y-4 text-left">
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase">Seu Nome</label>
              <Input placeholder="Como gosta de ser chamado?" className="bg-black/50 border-white/10" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase">WhatsApp</label>
              <Input placeholder="(00) 00000-0000" className="bg-black/50 border-white/10" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase">Onde você mora? (Bairro)</label>
              <Input placeholder="Ex: Muquiçaba..." className="bg-black/50 border-white/10" />
            </div>
            
            <Button 
              className="w-full h-12 bg-primary text-black font-bold uppercase tracking-wider mt-4"
              onClick={() => {
                alert("Obrigado! Nossos líderes entrarão em contato com você em breve!");
                document.getElementById('novo-aqui-modal')?.classList.add('hidden');
              }}
            >
              Enviar Saudação
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function MembersView() {
  const { members, visitors, reports, tasks, updateMemberAvailability, categories, addReport, addPrayer, addReferral } = useCell();
  const [showModal, setShowModal] = React.useState<string | null>(null);
  const currentUser = members.find(m => m.id === "1") || members[0];
  const [newArea, setNewArea] = React.useState(categories[0]);
  
  const [newReport, setNewReport] = React.useState({ date: new Date().toISOString().split('T')[0], present: '', visitors: '', summary: '' });
  const [newPrayer, setNewPrayer] = React.useState({ reason: '', details: '', isPrivate: false });
  const [newReferral, setNewReferral] = React.useState({ name: '', phone: '', notes: '' });

  const handleAction = (actionName: string) => {
    alert(`Ação executada: ${actionName}`);
  };

  const handleAddArea = () => {
    if (!currentUser.availability.includes(newArea)) {
      updateMemberAvailability(currentUser.id, [...currentUser.availability, newArea]);
    }
  };

  const handleRemoveArea = (areaToRemove: string) => {
    updateMemberAvailability(currentUser.id, currentUser.availability.filter(a => a !== areaToRemove));
  };

  const handleModalSubmit = () => {
    if (showModal === 'report') {
      if (!newReport.present || !newReport.summary) return;
      addReport({ ...newReport, present: parseInt(newReport.present), visitors: parseInt(newReport.visitors || '0') });
      setNewReport({ date: new Date().toISOString().split('T')[0], present: '', visitors: '', summary: '' });
    } else if (showModal === 'prayer') {
      if (!newPrayer.reason) return;
      addPrayer(newPrayer);
      setNewPrayer({ reason: '', details: '', isPrivate: false });
    } else if (showModal === 'referral') {
      if (!newReferral.name) return;
      addReferral(newReferral);
      setNewReferral({ name: '', phone: '', notes: '' });
    }
    handleAction('Salvo com sucesso');
    setShowModal(null);
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        {/* Member Header */}
        <div className="flex items-center gap-6 p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/10">
          <Avatar className="h-24 w-24 border-2 border-primary">
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold">{currentUser.name}</h1>
              <Badge className="bg-secondary text-black font-bold">{currentUser.role}</Badge>
            </div>
            <p className="text-white/60">Membro desde Outubro 2022 • Célula Esperança</p>
            <div className="flex gap-4 pt-2">
              <div className="text-center">
                <p className="text-xl font-bold">12</p>
                <p className="text-[10px] uppercase text-white/40 font-bold">Meses Ativo</p>
              </div>
              <Separator orientation="vertical" className="h-8 bg-white/10" />
              <div className="text-center">
                <p className="text-xl font-bold">4</p>
                <p className="text-[10px] uppercase text-white/40 font-bold">Ministérios</p>
              </div>
              <Separator orientation="vertical" className="h-8 bg-white/10" />
              <div className="text-center">
                <p className="text-xl font-bold">98%</p>
                <p className="text-[10px] uppercase text-white/40 font-bold">Frequência</p>
              </div>
            </div>
          </div>
        </div>

        {/* My Scales */}
        <Card className="bg-zinc-900 border-white/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Minhas Escalas</CardTitle>
              <CardDescription>Confira onde você serve nas próximas semanas</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="border-white/10" onClick={() => setShowModal('scales')}>Ver Todas</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.filter(t => t.assignee === currentUser.name || t.assignee === 'Você').slice(0, 2).map((task, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold">{task.category}</p>
                      <p className="text-xs text-white/40">{task.title}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{task.column}</p>
                    <Badge variant="default" className="bg-green-500/20 text-green-400 border-none">
                      Confirmado
                    </Badge>
                  </div>
                </div>
              ))}
              {tasks.filter(t => t.assignee === currentUser.name || t.assignee === 'Você').length === 0 && (
                <p className="text-sm text-white/40 text-center py-4">Nenhuma escala para os próximos encontros.</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Service Areas */}
        <Card className="bg-zinc-900 border-white/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Áreas de Serviço</CardTitle>
              <CardDescription>Onde você está disposto a servir na célula</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="border-white/10" onClick={() => setShowModal('service_areas')}><Settings className="h-4 w-4 mr-2" /> Editar</Button>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {currentUser.availability.map(area => (
                <Badge key={area} className="bg-primary/10 text-primary border-none px-3 py-1 text-sm">{area}</Badge>
              ))}
              <Badge variant="outline" className="border-white/20 text-white/40 px-3 py-1 text-sm border-dashed cursor-pointer hover:bg-white/5" onClick={() => setShowModal('service_areas')}><Plus className="h-3 w-3 mr-1" /> Editar</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Cell Group Info */}
        <Card className="bg-zinc-900 border-white/10">
          <CardHeader>
            <CardTitle>Minha Célula: Esperança</CardTitle>
            <CardDescription>Liderada por você e Maria Santos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                <p className="text-2xl font-bold">{members.length}</p>
                <p className="text-xs text-white/40 uppercase font-bold">Membros</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                <p className="text-2xl font-bold">{visitors.length}</p>
                <p className="text-xs text-white/40 uppercase font-bold">Visitantes</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                <p className="text-2xl font-bold">{reports.length}</p>
                <p className="text-xs text-white/40 uppercase font-bold">Relatórios</p>
              </div>
            </div>
            <Button className="w-full bg-secondary text-black hover:bg-secondary/90" onClick={() => setShowModal('report')}>
              Enviar Relatório da Semana
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        {/* Quick Actions */}
        <Card className="bg-zinc-900 border-white/10">
          <CardHeader>
            <CardTitle className="text-lg">Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Button variant="outline" className="w-full justify-start border-white/10 hover:bg-white/5" onClick={() => setShowModal('prayer')}>
              <Plus className="mr-2 h-4 w-4 text-primary" />
              Pedir Oração
            </Button>
            <Button variant="outline" className="w-full justify-start border-white/10 hover:bg-white/5" onClick={() => setShowModal('referral')}>
              <Users className="mr-2 h-4 w-4 text-primary" />
              Indicar Novo Membro
            </Button>
            <Button variant="outline" className="w-full justify-start border-white/10 hover:bg-white/5" onClick={() => setShowModal('donate')}>
              <TrendingUp className="mr-2 h-4 w-4 text-primary" />
              Contribuir (Dízimos/Ofertas)
            </Button>
          </CardContent>
        </Card>

        {/* Map Placeholder */}
        <Card className="bg-zinc-900 border-white/10 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg">Mapa de Células</CardTitle>
            <CardDescription>Guarapari, ES</CardDescription>
          </CardHeader>
          <div className="aspect-square bg-zinc-800 relative group cursor-pointer" onClick={() => setShowModal('map')}>
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="h-12 w-12 text-primary animate-bounce" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
              <p className="text-xs font-bold uppercase tracking-wider">84 Células encontradas</p>
              <p className="text-[10px] text-white/60">Clique para abrir o mapa interativo</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Modals for MembersView */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowModal(null)} className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg glass-card p-8 rounded-[2.5rem] space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <Button variant="ghost" size="icon" onClick={() => setShowModal(null)} className="absolute top-4 right-4 rounded-full hover:bg-white/10">
                <X className="w-5 h-5" />
              </Button>
              <h3 className="text-2xl font-black font-serif italic text-white">
                {showModal === 'scales' && 'Minhas Escalas'}
                {showModal === 'service_areas' && 'Áreas de Serviço'}
                {showModal === 'report' && 'Relatório da Semana'}
                {showModal === 'prayer' && 'Pedido de Oração'}
                {showModal === 'referral' && 'Indicar Membro'}
                {showModal === 'donate' && 'Contribuição'}
                {showModal === 'map' && 'Mapa Interativo'}
              </h3>
              
              <div className="space-y-4">
                {showModal === 'scales' && (
                  <div className="space-y-4">
                    {tasks.filter(t => t.assignee === currentUser.name || t.assignee === 'Você').map((task, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Users className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-bold">{task.category}</p>
                            <p className="text-xs text-white/40">{task.title}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{task.column}</p>
                          <Badge variant="default" className="bg-green-500/20 text-green-400 border-none">
                            Confirmado
                          </Badge>
                        </div>
                      </div>
                    ))}
                    {tasks.filter(t => t.assignee === currentUser.name || t.assignee === 'Você').length === 0 && (
                      <p className="text-sm text-white/40 text-center py-4">Nenhuma escala encontrada.</p>
                    )}
                  </div>
                )}
                
                {showModal === 'service_areas' && (
                  <>
                    <div className="space-y-2 flex items-end gap-2">
                      <div className="flex-1 space-y-2">
                        <label className="text-xs font-bold text-white/40 uppercase">Adicionar Área</label>
                        <select 
                          className="w-full h-10 bg-zinc-900 border border-white/10 rounded-md px-3 text-white"
                          value={newArea}
                          onChange={e => setNewArea(e.target.value)}
                        >
                          {categories.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <Button className="bg-primary text-black font-bold h-10" onClick={handleAddArea}>Adicionar</Button>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/40 uppercase">Áreas Atuais</label>
                      <div className="flex flex-wrap gap-2">
                        {currentUser.availability.map(area => (
                          <Badge key={area} className="bg-primary/10 text-primary border-none px-3 py-1 text-sm flex items-center gap-2">
                            {area} <X className="h-3 w-3 cursor-pointer" onClick={() => handleRemoveArea(area)} />
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {showModal === 'report' && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Data do Encontro</label><Input type="date" className="bg-zinc-900 border-white/10" value={newReport.date} onChange={e => setNewReport({...newReport, date: e.target.value})} /></div>
                      <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Presentes</label><Input type="number" className="bg-zinc-900 border-white/10" placeholder="0" value={newReport.present} onChange={e => setNewReport({...newReport, present: e.target.value})} /></div>
                    </div>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Visitantes</label><Input type="number" className="bg-zinc-900 border-white/10" placeholder="0" value={newReport.visitors} onChange={e => setNewReport({...newReport, visitors: e.target.value})} /></div>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Resumo / Testemunhos</label><textarea className="w-full bg-zinc-900 border border-white/10 rounded-md p-3 min-h-[80px]" placeholder="Como foi a célula?" value={newReport.summary} onChange={e => setNewReport({...newReport, summary: e.target.value})} /></div>
                  </>
                )}

                {showModal === 'prayer' && (
                  <>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Motivo</label><Input className="bg-zinc-900 border-white/10" placeholder="Ex: Saúde, Família, Finanças..." value={newPrayer.reason} onChange={e => setNewPrayer({...newPrayer, reason: e.target.value})} /></div>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Detalhes</label><textarea className="w-full bg-zinc-900 border border-white/10 rounded-md p-3 min-h-[80px]" placeholder="Descreva seu pedido..." value={newPrayer.details} onChange={e => setNewPrayer({...newPrayer, details: e.target.value})} /></div>
                    <div className="flex items-center gap-2 mt-2">
                      <input type="checkbox" id="private" className="rounded border-white/10 bg-zinc-900" checked={newPrayer.isPrivate} onChange={e => setNewPrayer({...newPrayer, isPrivate: e.target.checked})} />
                      <label htmlFor="private" className="text-sm text-white/60">Manter em sigilo (apenas líderes)</label>
                    </div>
                  </>
                )}

                {showModal === 'referral' && (
                  <>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Nome do Indicado</label><Input className="bg-zinc-900 border-white/10" placeholder="Nome completo" value={newReferral.name} onChange={e => setNewReferral({...newReferral, name: e.target.value})} /></div>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Telefone / WhatsApp</label><Input className="bg-zinc-900 border-white/10" placeholder="(00) 00000-0000" value={newReferral.phone} onChange={e => setNewReferral({...newReferral, phone: e.target.value})} /></div>
                    <div className="space-y-2"><label className="text-xs font-bold text-white/40 uppercase">Observações</label><textarea className="w-full bg-zinc-900 border border-white/10 rounded-md p-3 min-h-[80px]" placeholder="Como você o conhece? Ele já visitou a igreja?" value={newReferral.notes} onChange={e => setNewReferral({...newReferral, notes: e.target.value})} /></div>
                  </>
                )}

                {showModal === 'donate' && (
                  <div className="space-y-6 text-center">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-sm text-white/60 mb-2">Chave PIX (CNPJ)</p>
                      <p className="text-2xl font-bold text-primary tracking-wider">12.345.678/0001-90</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-sm text-white/60 mb-2">Transferência Bancária</p>
                      <p className="font-bold">Banco do Brasil (001)</p>
                      <p className="text-sm">Agência: 1234-5</p>
                      <p className="text-sm">Conta: 12345-6</p>
                    </div>
                    <Button variant="outline" className="w-full border-white/10" onClick={() => { handleAction('Comprovante enviado'); setShowModal(null); }}>
                      Enviar Comprovante
                    </Button>
                  </div>
                )}

                {showModal === 'map' && (
                  <div className="h-[400px] w-full rounded-xl overflow-hidden relative bg-zinc-800">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.206411545645!2d-40.5055!3d-20.6695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQwJzEwLjIiUyA0MMKwMzAnMTkuOCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full grayscale contrast-125 invert brightness-90"
                    />
                  </div>
                )}

                {showModal !== 'scales' && showModal !== 'donate' && showModal !== 'map' && showModal !== 'service_areas' && (
                  <Button className="w-full bg-primary text-black font-bold mt-4" onClick={handleModalSubmit}>Salvar</Button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

function SchoolView() {
  const { courses, enrollments, savedCourses, enrollInCourse, markLessonComplete, toggleSavedCourse, purchaseCourse, subscribeToPlan } = useSchool();
  const [selectedCourse, setSelectedCourse] = React.useState<Course | null>(null);
  const [activePlayerCourse, setActivePlayerCourse] = React.useState<Course | null>(null);
  const [activeLesson, setActiveLesson] = React.useState<Lesson | null>(null);
  const [activeTab, setActiveTab] = React.useState("courses");
  const [activeSidebarTab, setActiveSidebarTab] = React.useState("content");
  const [noteText, setNoteText] = React.useState("");
  const [forumQuestionText, setForumQuestionText] = React.useState("");
  const [showQuiz, setShowQuiz] = React.useState(false);
  const [quizAnswers, setQuizAnswers] = React.useState<Record<string, number>>({});
  const [openQuizAnswers, setOpenQuizAnswers] = React.useState<Record<string, string>>({});
  const [isGradingQuiz, setIsGradingQuiz] = React.useState(false);
  const [quizResult, setQuizResult] = React.useState<{ score: number, passed: boolean, mistakes?: any[], openFeedback?: string } | null>(null);
  const [showCheckout, setShowCheckout] = React.useState<{ type: 'course' | 'plan', id: string } | null>(null);
  const [checkoutMethod, setCheckoutMethod] = React.useState<'pix' | 'card'>('pix');
  const [showCertificate, setShowCertificate] = React.useState<Enrollment | null>(null);
  const [showSubtitles, setShowSubtitles] = React.useState(false);
  const { notes, forumQuestions, addNote, addForumQuestion } = useSchool();

  const inProgress = enrollments.filter(e => e.progress < 100).map(e => ({
    ...e,
    course: courses.find(c => c.id === e.courseId)!
  })).filter(e => e.course);

  const completed = enrollments.filter(e => e.progress === 100).map(e => ({
    ...e,
    course: courses.find(c => c.id === e.courseId)!
  })).filter(e => e.course);

  const saved = courses.filter(c => savedCourses.includes(c.id));

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Coroado School</h1>
          <p className="text-white/60">Escola IDE: Formando discípulos que fazem discípulos.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold">Seu Progresso</p>
            <p className="text-xs text-white/40">{completed.length} de {courses.length} cursos concluídos</p>
          </div>
          <div className="h-12 w-12 rounded-full border-4 border-primary border-t-white/10 flex items-center justify-center font-bold">
            {courses.length > 0 ? Math.round((completed.length / courses.length) * 100) : 0}%
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="bg-zinc-900 border border-white/10 p-1 rounded-full flex-wrap justify-center gap-2">
          <TabsTrigger value="courses" className="rounded-full px-8 data-[state=active]:bg-primary data-[state=active]:text-black">Cursos</TabsTrigger>
          <TabsTrigger value="plans" className="rounded-full px-8 data-[state=active]:bg-primary data-[state=active]:text-black">Planos</TabsTrigger>
          <TabsTrigger value="my-learning" className="rounded-full px-8 data-[state=active]:bg-primary data-[state=active]:text-black">Meu Aprendizado</TabsTrigger>
          <TabsTrigger value="certificates" className="rounded-full px-8 data-[state=active]:bg-primary data-[state=active]:text-black">Certificados</TabsTrigger>
          <TabsTrigger value="achievements" className="rounded-full px-8 data-[state=active]:bg-primary data-[state=active]:text-black">Conquistas</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="bg-zinc-900 border-white/10 overflow-hidden group hover:border-primary/50 transition-all">
                <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                  <img 
                    src={course.img} 
                    alt={course.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-black/60 backdrop-blur-md border-white/10">{course.level}</Badge>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-4 right-4 rounded-full bg-black/50 hover:bg-black/80 text-white"
                    onClick={(e) => { e.stopPropagation(); toggleSavedCourse(course.id); }}
                  >
                    <Heart className={`w-5 h-5 ${savedCourses.includes(course.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{course.title}</h3>
                  <div className="flex items-center justify-between text-sm text-white/40">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>{course.students} alunos</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full border-white/10 hover:bg-primary hover:text-black transition-colors" 
                    variant="outline"
                    onClick={() => setSelectedCourse(course)}
                  >
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="plans" className="space-y-8">
          <SchoolPlans onSubscribe={(planId) => setShowCheckout({ type: 'plan', id: planId })} />
        </TabsContent>

        <TabsContent value="my-learning" className="space-y-8">
          <Tabs defaultValue="in-progress" className="space-y-6">
            <TabsList className="bg-zinc-900 border border-white/10 p-1 rounded-full">
              <TabsTrigger value="in-progress" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Em Andamento</TabsTrigger>
              <TabsTrigger value="completed" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Concluídos</TabsTrigger>
              <TabsTrigger value="saved" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Lista de Desejos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="in-progress" className="space-y-6">
              {inProgress.length === 0 ? (
                <div className="p-12 text-center border border-white/10 rounded-[2.5rem] bg-white/5">
                  <BookOpen className="h-12 w-12 text-white/20 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Nenhum curso em andamento</h3>
                  <p className="text-white/60">Você ainda não iniciou nenhum curso.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {inProgress.map((enrollment) => (
                    <Card key={enrollment.courseId} className="bg-zinc-900 border-white/10 overflow-hidden flex flex-col sm:flex-row">
                      <div className="w-full sm:w-48 h-32 sm:h-auto bg-zinc-800 relative">
                        <img src={enrollment.course.img} alt={enrollment.course.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <CardContent className="p-6 flex-1 space-y-4">
                        <h3 className="font-bold text-lg">{enrollment.course.title}</h3>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs text-white/60">
                            <span>Progresso</span>
                            <span>{enrollment.progress}%</span>
                          </div>
                          <div className="h-2 bg-black rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: `${enrollment.progress}%` }} />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs text-white/60">
                          <div>
                            <p className="font-bold text-white">Última aula:</p>
                            <p>{enrollment.lastLessonId ? enrollment.course.modules.flatMap(m => m.lessons).find(l => l.id === enrollment.lastLessonId)?.title : "Nenhuma"}</p>
                          </div>
                          <div>
                            <p className="font-bold text-white">Status:</p>
                            <p className="text-primary">Em andamento</p>
                          </div>
                        </div>
                        <Button className="w-full bg-primary text-black font-bold" onClick={() => { setActivePlayerCourse(enrollment.course); setActiveLesson(enrollment.course.modules.flatMap(m => m.lessons).find(l => l.id === enrollment.lastLessonId) || enrollment.course.modules[0]?.lessons[0] || null); }}>Continuar Estudando</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="completed" className="space-y-6">
              {completed.length === 0 ? (
                <div className="p-12 text-center border border-white/10 rounded-[2.5rem] bg-white/5">
                  <Award className="h-12 w-12 text-white/20 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Nenhum curso concluído</h3>
                  <p className="text-white/60">Continue estudando para conquistar seus certificados.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {completed.map((enrollment) => (
                    <Card key={enrollment.courseId} className="bg-zinc-900 border-white/10 overflow-hidden flex flex-col sm:flex-row">
                      <div className="w-full sm:w-48 h-32 sm:h-auto bg-zinc-800 relative">
                        <img src={enrollment.course.img} alt={enrollment.course.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        <div className="absolute top-2 right-2 bg-green-500 text-black p-1 rounded-full">
                          <CheckSquare className="h-4 w-4" />
                        </div>
                      </div>
                      <CardContent className="p-6 flex-1 space-y-4">
                        <h3 className="font-bold text-lg">{enrollment.course.title}</h3>
                        <div className="flex gap-4 text-sm text-white/60">
                          <div>
                            <p>Concluído em:</p>
                            <p className="font-bold text-white">{enrollment.completedAt ? new Date(enrollment.completedAt).toLocaleDateString() : '-'}</p>
                          </div>
                          <div>
                            <p>Nota Final:</p>
                            <p className="font-bold text-white">{enrollment.finalGrade?.toFixed(1) || '-'}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" className="flex-1 border-white/10 text-xs">Ver Certificado</Button>
                          <Button variant="outline" className="flex-1 border-white/10 text-xs" onClick={() => { setActivePlayerCourse(enrollment.course); setActiveLesson(enrollment.course.modules[0]?.lessons[0] || null); }}>Revisar</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="saved" className="space-y-6">
              {saved.length === 0 ? (
                <div className="p-12 text-center border border-white/10 rounded-[2.5rem] bg-white/5">
                  <Heart className="h-12 w-12 text-white/20 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Sua lista de desejos está vazia</h3>
                  <p className="text-white/60 mb-6">Explore o catálogo e salve os cursos que deseja fazer no futuro.</p>
                  <Button className="bg-primary text-black" onClick={() => setActiveTab("courses")}>Explorar Cursos</Button>
                </div>
              ) : (
                <div className="grid md:grid-cols-3 gap-6">
                  {saved.map((course) => (
                    <Card key={course.id} className="bg-zinc-900 border-white/10 overflow-hidden group hover:border-primary/50 transition-all">
                      <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                        <img 
                          src={course.img} 
                          alt={course.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-black/60 backdrop-blur-md border-white/10">{course.level}</Badge>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="absolute top-4 right-4 rounded-full bg-black/50 hover:bg-black/80 text-white"
                          onClick={() => toggleSavedCourse(course.id)}
                        >
                          <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                        </Button>
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{course.title}</h3>
                        <div className="flex items-center justify-between text-sm text-white/40">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>{course.students} alunos</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full border-white/10 hover:bg-primary hover:text-black transition-colors" 
                          variant="outline"
                          onClick={() => setSelectedCourse(course)}
                        >
                          Ver Detalhes
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </TabsContent>

        <TabsContent value="certificates" className="space-y-8">
          {completed.length === 0 ? (
            <div className="p-12 text-center border border-white/10 rounded-[2.5rem] bg-white/5">
              <Award className="h-12 w-12 text-white/20 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Nenhum certificado ainda</h3>
              <p className="text-white/60">Conclua cursos para ganhar certificados.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completed.map((enrollment) => (
                <Card key={enrollment.courseId} className="bg-zinc-900 border-white/10 overflow-hidden group">
                  <div className="aspect-[4/3] bg-zinc-800 relative p-6 flex flex-col items-center justify-center text-center border-b border-white/10">
                    <div className="absolute inset-0 opacity-20">
                      <img src={enrollment.course.img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="relative z-10 space-y-2">
                      <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                      <h3 className="font-serif italic text-2xl font-bold text-white">{enrollment.course.title}</h3>
                      <p className="text-sm text-white/80">Concluído em {enrollment.completedAt ? new Date(enrollment.completedAt).toLocaleDateString() : '-'}</p>
                    </div>
                  </div>
                  <CardContent className="p-4 space-y-4">
                    <div className="text-sm text-white/60 flex justify-between">
                      <span>Professor:</span>
                      <span className="text-white">{enrollment.course.professor}</span>
                    </div>
                    <div className="text-xs text-white/40 flex justify-between bg-black/50 p-2 rounded">
                      <span>Código:</span>
                      <span className="font-mono">CERT-{enrollment.courseId.toUpperCase()}-{new Date().getFullYear()}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-primary text-black font-bold text-xs" onClick={() => setShowCertificate(enrollment)}><Download className="h-4 w-4 mr-2" /> PDF</Button>
                      <Button variant="outline" className="flex-1 border-white/10 text-xs"><Share2 className="h-4 w-4 mr-2" /> Compartilhar</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="achievements" className="space-y-8">
          <SchoolAchievements />
        </TabsContent>
      </Tabs>

      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)} className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl glass-card rounded-[2.5rem] max-h-[90vh] overflow-hidden flex flex-col"
            >
              <div className="relative h-64 shrink-0">
                <img src={selectedCourse.img} alt={selectedCourse.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-4 right-16 rounded-full bg-black/50 hover:bg-black/80 text-white"
                  onClick={() => toggleSavedCourse(selectedCourse.id)}
                >
                  <Heart className={`w-5 h-5 ${savedCourses.includes(selectedCourse.id) ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setSelectedCourse(null)} className="absolute top-4 right-4 rounded-full bg-black/50 hover:bg-black/80 text-white">
                  <X className="w-5 h-5" />
                </Button>
                <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end">
                  <div>
                    <Badge className="bg-primary/20 text-primary border-none mb-3">{selectedCourse.level}</Badge>
                    <h2 className="text-4xl font-black font-serif italic text-white">{selectedCourse.title}</h2>
                    <p className="text-white/80 mt-2 flex items-center gap-4">
                      <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {selectedCourse.duration}</span>
                      <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {selectedCourse.students} alunos</span>
                    </p>
                  </div>
                  <Button 
                    className="bg-primary text-black font-bold px-8 py-6 rounded-full text-lg shadow-[0_0_30px_rgba(170,255,0,0.3)] hover:scale-105 transition-transform"
                    onClick={() => {
                      if (enrollments.some(e => e.courseId === selectedCourse.id)) {
                        setSelectedCourse(null);
                        setActivePlayerCourse(selectedCourse);
                        const enrollment = enrollments.find(e => e.courseId === selectedCourse.id);
                        setActiveLesson(enrollment?.lastLessonId ? selectedCourse.modules.flatMap(m => m.lessons).find(l => l.id === enrollment.lastLessonId) || selectedCourse.modules[0]?.lessons[0] || null : selectedCourse.modules[0]?.lessons[0] || null);
                      } else if (selectedCourse.price && selectedCourse.price > 0) {
                        setShowCheckout({ type: 'course', id: selectedCourse.id });
                      } else {
                        enrollInCourse(selectedCourse.id);
                        setSelectedCourse(null);
                        setActivePlayerCourse(selectedCourse);
                        setActiveLesson(selectedCourse.modules[0]?.lessons[0] || null);
                      }
                    }}
                  >
                    {enrollments.some(e => e.courseId === selectedCourse.id) 
                      ? "Continuar Curso" 
                      : (selectedCourse.price && selectedCourse.price > 0 ? `Comprar por R$ ${selectedCourse.price.toFixed(2).replace('.', ',')}` : "Matricular-se Grátis")}
                  </Button>
                </div>
              </div>
              
              <div className="p-8 overflow-y-auto grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                  <section>
                    <h3 className="text-xl font-bold mb-4">O que você vai aprender</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedCourse.learningOutcomes.map((outcome, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-white/80">
                          <CheckSquare className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-bold mb-4">Currículo / Ementa</h3>
                    <div className="space-y-3">
                      {selectedCourse.modules.map((mod: Module) => (
                        <div key={mod.id} className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center cursor-pointer hover:bg-white/10 transition-colors">
                          <div>
                            <p className="font-bold">{mod.title}</p>
                            <p className="text-xs text-white/60">{mod.lessons.length} aulas</p>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-white/60">
                            <span>{mod.lessons.reduce((acc, l) => acc + parseInt(l.duration), 0)} min</span>
                            <ChevronRight className="h-4 w-4" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
                
                <div className="space-y-6">
                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-6 space-y-4">
                      <h4 className="font-bold text-sm uppercase tracking-wider text-white/60">Detalhes do Curso</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between"><span className="text-white/60">Professor</span><span className="font-bold">{selectedCourse.professor}</span></div>
                        <div className="flex justify-between"><span className="text-white/60">Categoria</span><span className="font-bold">{selectedCourse.category}</span></div>
                        <div className="flex justify-between"><span className="text-white/60">Certificado</span><span className="font-bold text-primary">Sim</span></div>
                        <div className="flex justify-between"><span className="text-white/60">Acesso</span><span className="font-bold">Vitalício</span></div>
                        <div className="flex justify-between"><span className="text-white/60">Avaliação</span><span className="font-bold flex items-center gap-1"><Star className="h-3 w-3 text-secondary fill-secondary" /> {selectedCourse.rating.toFixed(1)}</span></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCheckout && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowCheckout(null)} className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md glass-card p-8 rounded-[2.5rem] space-y-6"
            >
              <Button variant="ghost" size="icon" onClick={() => setShowCheckout(null)} className="absolute top-4 right-4 rounded-full hover:bg-white/10">
                <X className="w-5 h-5" />
              </Button>
              <h3 className="text-2xl font-black font-serif italic text-white">Finalizar Compra</h3>
              
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Button 
                    variant={checkoutMethod === 'pix' ? 'default' : 'outline'} 
                    className={`flex-1 ${checkoutMethod === 'pix' ? 'bg-primary text-black' : 'border-white/10'}`}
                    onClick={() => setCheckoutMethod('pix')}
                  >
                    PIX
                  </Button>
                  <Button 
                    variant={checkoutMethod === 'card' ? 'default' : 'outline'} 
                    className={`flex-1 ${checkoutMethod === 'card' ? 'bg-primary text-black' : 'border-white/10'}`}
                    onClick={() => setCheckoutMethod('card')}
                  >
                    Cartão de Crédito
                  </Button>
                </div>

                {checkoutMethod === 'pix' ? (
                  <div className="bg-white p-4 rounded-xl flex flex-col items-center justify-center space-y-4">
                    <div className="w-48 h-48 bg-zinc-200 flex items-center justify-center text-zinc-500 font-bold border-4 border-dashed border-zinc-400">
                      QR CODE PIX
                    </div>
                    <p className="text-black text-sm font-bold">Escaneie para pagar</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Input placeholder="Número do Cartão" className="bg-black border-white/10" />
                    <div className="flex gap-3">
                      <Input placeholder="MM/AA" className="bg-black border-white/10 flex-1" />
                      <Input placeholder="CVC" className="bg-black border-white/10 flex-1" />
                    </div>
                    <Input placeholder="Nome no Cartão" className="bg-black border-white/10" />
                  </div>
                )}

                <Button 
                  className="w-full bg-primary text-black font-bold py-6 text-lg"
                  onClick={() => {
                    if (showCheckout.type === 'course') {
                      purchaseCourse(showCheckout.id, checkoutMethod);
                      setShowCheckout(null);
                      setSelectedCourse(null);
                      const course = courses.find(c => c.id === showCheckout.id);
                      if (course) {
                        setActivePlayerCourse(course);
                        setActiveLesson(course.modules[0]?.lessons[0] || null);
                      }
                    } else {
                      subscribeToPlan(showCheckout.id, checkoutMethod);
                      setShowCheckout(null);
                    }
                  }}
                >
                  Confirmar Pagamento
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCertificate && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowCertificate(null)} className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-white text-black p-12 rounded-xl space-y-8 border-8 border-double border-zinc-300 shadow-2xl"
            >
              <Button variant="ghost" size="icon" onClick={() => setShowCertificate(null)} className="absolute top-4 right-4 rounded-full hover:bg-black/10">
                <X className="w-5 h-5" />
              </Button>
              
              <div className="text-center space-y-6">
                <div className="flex justify-center mb-8">
                  <Award className="h-24 w-24 text-yellow-500" />
                </div>
                <h1 className="text-5xl font-serif italic font-black text-zinc-900 uppercase tracking-widest">Certificado de Conclusão</h1>
                <p className="text-xl text-zinc-600">Certificamos que</p>
                <h2 className="text-4xl font-bold text-primary border-b-2 border-zinc-200 pb-4 inline-block px-12">João Silva</h2>
                <p className="text-xl text-zinc-600">concluiu com êxito o curso</p>
                <h3 className="text-3xl font-bold text-zinc-800">{showCertificate.course.title}</h3>
                <p className="text-lg text-zinc-500">com carga horária de {showCertificate.course.duration}, ministrado por {showCertificate.course.professor}.</p>
              </div>

              <div className="flex justify-between items-end pt-12 mt-12 border-t border-zinc-200">
                <div className="text-left">
                  <p className="text-sm text-zinc-500">Data de Conclusão</p>
                  <p className="font-bold">{showCertificate.completedAt ? new Date(showCertificate.completedAt).toLocaleDateString() : '-'}</p>
                </div>
                <div className="text-center">
                  <div className="w-48 border-b border-zinc-800 mb-2"></div>
                  <p className="text-sm font-bold text-zinc-800">Diretoria Escola IDE</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-zinc-500">Código de Verificação</p>
                  <p className="font-mono font-bold text-xs">CERT-{showCertificate.courseId.toUpperCase()}-{new Date().getFullYear()}</p>
                </div>
              </div>
              
              <div className="absolute top-4 left-4 print:hidden">
                <Button variant="outline" onClick={() => window.print()} className="border-zinc-300 text-zinc-700 hover:bg-zinc-100">
                  <Download className="mr-2 h-4 w-4" /> Imprimir PDF
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activePlayerCourse && (
          <div className="fixed inset-0 z-[110] bg-black flex flex-col">
            <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 shrink-0">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => setActivePlayerCourse(null)} className="rounded-full hover:bg-white/10">
                  <X className="w-5 h-5" />
                </Button>
                <h2 className="font-bold">{activePlayerCourse.title}</h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-white/60">
                  {enrollments.find(e => e.courseId === activePlayerCourse.id)?.progress || 0}% concluído
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
              <div className="flex-1 flex flex-col relative">
                <div className="w-full aspect-video bg-black relative">
                  {showQuiz && activeLesson?.quiz ? (
                    <div className="absolute inset-0 bg-zinc-900 p-8 overflow-y-auto flex flex-col">
                      {quizResult ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
                          <div className={`h-24 w-24 rounded-full flex items-center justify-center ${quizResult.passed ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                            {quizResult.passed ? <Check className="h-12 w-12" /> : <X className="h-12 w-12" />}
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold mb-2">{quizResult.passed ? 'Aprovado!' : 'Tente Novamente'}</h3>
                            <p className="text-white/60">Você acertou {quizResult.score}% das questões.</p>
                          </div>
                          {quizResult.passed ? (
                            <Button className="bg-primary text-black font-bold" onClick={() => {
                              markLessonComplete(activePlayerCourse.id, activeLesson.id);
                              setShowQuiz(false);
                              setQuizResult(null);
                            }}>Continuar Curso</Button>
                          ) : (
                            <div className="space-y-4 w-full max-w-md mx-auto">
                              <Button variant="outline" className="w-full" onClick={() => { setQuizResult(null); setQuizAnswers({}); setOpenQuizAnswers({}); }}>Refazer Quiz</Button>
                              {quizResult.mistakes && quizResult.mistakes.length > 0 && (
                                <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10 text-left">
                                  <div className="flex items-center gap-2 mb-4 text-primary font-bold">
                                    <Sparkles className="w-5 h-5" />
                                    <h4>Revisão Guiada por IA</h4>
                                  </div>
                                  <p className="text-sm text-white/60 mb-4">Baseado nos seus erros, sugerimos revisar os seguintes tópicos:</p>
                                  <ul className="space-y-3">
                                    {quizResult.mistakes.map((m, idx) => (
                                      <li key={idx} className="flex items-start gap-3 text-sm">
                                        <PlayCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        <span>Revisar conceito: <strong className="text-white">{m.questionText}</strong></span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {quizResult.openFeedback && (
                                <div className="mt-4 p-6 rounded-xl bg-white/5 border border-white/10 text-left">
                                  <div className="flex items-center gap-2 mb-4 text-primary font-bold">
                                    <Sparkles className="w-5 h-5" />
                                    <h4>Feedback da IA (Questões Abertas)</h4>
                                  </div>
                                  <p className="text-sm text-white/80 whitespace-pre-wrap">{quizResult.openFeedback}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ) : (
                        <>
                          <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-2">Quiz: {activeLesson.title}</h3>
                            <p className="text-white/60">Responda as questões abaixo para concluir a aula.</p>
                          </div>
                          <div className="space-y-8 flex-1">
                            {activeLesson.quiz.questions.map((q, i) => (
                              <div key={q.id} className="space-y-4">
                                <p className="font-bold">{i + 1}. {q.question}</p>
                                <div className="space-y-2">
                                  {q.options.map((opt, optIdx) => (
                                    <div 
                                      key={optIdx} 
                                      className={`p-4 rounded-xl border cursor-pointer transition-colors ${quizAnswers[q.id] === optIdx ? 'bg-primary/20 border-primary text-primary' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                                      onClick={() => setQuizAnswers({ ...quizAnswers, [q.id]: optIdx })}
                                    >
                                      {opt}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                            {activeLesson.quiz.openQuestions && activeLesson.quiz.openQuestions.map((q, i) => (
                              <div key={q.id} className="space-y-4 pt-6 border-t border-white/10">
                                <div className="flex items-center gap-2">
                                  <p className="font-bold">Questão Aberta {i + 1}. {q.question}</p>
                                  <Sparkles className="h-4 w-4 text-primary" />
                                </div>
                                <textarea 
                                  className="w-full min-h-[120px] p-4 rounded-xl bg-black border border-white/10 text-sm"
                                  placeholder="Digite sua resposta aqui..."
                                  value={openQuizAnswers[q.id] || ''}
                                  onChange={(e) => setOpenQuizAnswers({ ...openQuizAnswers, [q.id]: e.target.value })}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                            <Button 
                              className="bg-primary text-black font-bold px-8"
                              disabled={Object.keys(quizAnswers).length < activeLesson.quiz.questions.length || (activeLesson.quiz.openQuestions && Object.keys(openQuizAnswers).length < activeLesson.quiz.openQuestions.length) || isGradingQuiz}
                              onClick={() => {
                                setIsGradingQuiz(true);
                                // Simulate AI Grading
                                setTimeout(() => {
                                  let correct = 0;
                                  const mistakes: any[] = [];
                                  activeLesson.quiz!.questions.forEach(q => {
                                    if (quizAnswers[q.id] === q.correctAnswerIndex) {
                                      correct++;
                                    } else {
                                      mistakes.push({ lessonId: activeLesson.id, questionId: q.id, questionText: q.question });
                                    }
                                  });
                                  
                                  // Simulate AI evaluating open questions
                                  let openScore = 0;
                                  let openFeedback = "";
                                  if (activeLesson.quiz!.openQuestions && activeLesson.quiz!.openQuestions.length > 0) {
                                    openScore = activeLesson.quiz!.openQuestions.length; // Assume 100% for simulation
                                    openFeedback = "A IA analisou suas respostas abertas e considerou que você compreendeu bem os conceitos, abordando os pontos principais do gabarito.";
                                  }

                                  const totalQuestions = activeLesson.quiz!.questions.length + (activeLesson.quiz!.openQuestions?.length || 0);
                                  const score = Math.round(((correct + openScore) / totalQuestions) * 100);
                                  
                                  setQuizResult({ score, passed: score >= activeLesson.quiz!.passingScore, mistakes, openFeedback });
                                  setIsGradingQuiz(false);
                                }, 2000);
                              }}
                            >
                              {isGradingQuiz ? 'IA Corrigindo...' : 'Finalizar Quiz'}
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  ) : activeLesson ? (
                    <div className="relative w-full h-full">
                      <iframe 
                        src={`https://www.youtube.com/embed/${activeLesson.videoId}?enablejsapi=1&rel=0&modestbranding=1`}
                        className="w-full h-full border-0"
                        allowFullScreen
                      />
                      {showSubtitles && activeLesson.subtitles && (
                        <div className="absolute bottom-12 left-0 right-0 text-center pointer-events-none">
                          <span className="bg-black/80 text-white px-4 py-2 rounded-lg text-lg font-medium inline-block max-w-[80%]">
                            {activeLesson.subtitles[0]?.text || "Legendas geradas por IA..."}
                          </span>
                        </div>
                      )}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className={`absolute bottom-4 right-4 rounded-full bg-black/50 hover:bg-black/80 ${showSubtitles ? 'text-primary' : 'text-white'}`}
                        onClick={() => setShowSubtitles(!showSubtitles)}
                        title="Legendas (IA)"
                      >
                        <Captions className="w-5 h-5" />
                      </Button>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/40">Nenhuma aula selecionada</div>
                  )}
                </div>
                <div className="p-6 flex-1 overflow-y-auto">
                  <h3 className="text-2xl font-bold mb-2">{activeLesson?.title || 'Selecione uma aula'}</h3>
                  <p className="text-white/60">Assista a aula e marque como concluída para avançar.</p>
                  
                  {activeLesson?.summary && (
                    <div className="mt-6 p-6 rounded-xl bg-primary/10 border border-primary/20">
                      <div className="flex items-center gap-2 mb-3 text-primary font-bold">
                        <Sparkles className="w-5 h-5" />
                        <h4>Resumo Inteligente (IA)</h4>
                      </div>
                      <p className="text-white/80 leading-relaxed text-sm">
                        {activeLesson.summary}
                      </p>
                    </div>
                  )}

                  <Button 
                    className="mt-6 bg-primary text-black font-bold"
                    onClick={() => {
                      if (activeLesson?.quiz) {
                        setShowQuiz(true);
                        setQuizResult(null);
                        setQuizAnswers({});
                      } else if (activeLesson) {
                        markLessonComplete(activePlayerCourse.id, activeLesson.id);
                      }
                    }}
                    disabled={!activeLesson || enrollments.find(e => e.courseId === activePlayerCourse.id)?.completedLessons.includes(activeLesson.id)}
                  >
                    {activeLesson && enrollments.find(e => e.courseId === activePlayerCourse.id)?.completedLessons.includes(activeLesson.id) ? 'Concluída' : (activeLesson?.quiz ? 'Fazer Quiz para Concluir' : 'Marcar como Concluída')}
                  </Button>
                </div>
              </div>
              
              <div className="w-full lg:w-96 border-l border-white/10 bg-zinc-900 flex flex-col">
                <div className="flex border-b border-white/10">
                  <button className={`flex-1 p-4 text-sm font-bold border-b-2 transition-colors ${activeSidebarTab === 'content' ? 'border-primary text-primary' : 'border-transparent text-white/60 hover:text-white'}`} onClick={() => setActiveSidebarTab('content')}>Conteúdo</button>
                  <button className={`flex-1 p-4 text-sm font-bold border-b-2 transition-colors ${activeSidebarTab === 'notes' ? 'border-primary text-primary' : 'border-transparent text-white/60 hover:text-white'}`} onClick={() => setActiveSidebarTab('notes')}>Anotações</button>
                  <button className={`flex-1 p-4 text-sm font-bold border-b-2 transition-colors ${activeSidebarTab === 'forum' ? 'border-primary text-primary' : 'border-transparent text-white/60 hover:text-white'}`} onClick={() => setActiveSidebarTab('forum')}>Fórum</button>
                </div>
                <ScrollArea className="flex-1">
                  {activeSidebarTab === 'content' && (
                    <div className="p-4 space-y-4">
                      {activePlayerCourse.modules.map((mod: Module) => (
                        <div key={mod.id} className="space-y-2">
                          <h4 className="font-bold text-sm text-white/80">{mod.title}</h4>
                          <div className="space-y-1">
                            {mod.lessons.map((lesson: Lesson) => {
                              const isCompleted = enrollments.find(e => e.courseId === activePlayerCourse.id)?.completedLessons.includes(lesson.id);
                              const isActive = activeLesson?.id === lesson.id;
                              return (
                                <div key={lesson.id} className={`p-3 rounded-lg flex items-center gap-3 cursor-pointer transition-colors ${isActive ? 'bg-white/10' : 'hover:bg-white/5'}`} onClick={() => { setActiveLesson(lesson); setShowQuiz(false); }}>
                                  <div className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 ${isCompleted ? 'bg-primary border-primary text-black' : 'border-white/20'}`}>
                                    {isCompleted && <Check className="h-3 w-3" />}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className={`text-sm truncate ${isCompleted ? 'text-white/60' : 'text-white'} ${isActive ? 'font-bold' : ''}`}>{lesson.title}</p>
                                    <p className="text-xs text-white/40">{lesson.duration}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeSidebarTab === 'notes' && activeLesson && (
                    <div className="p-4 flex flex-col h-full">
                      <div className="flex-1 space-y-4 mb-4">
                        {notes.filter(n => n.courseId === activePlayerCourse.id && n.lessonId === activeLesson.id).map(note => (
                          <div key={note.id} className="p-3 bg-white/5 rounded-lg border border-white/10">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs border-primary text-primary cursor-pointer hover:bg-primary/10">
                                {Math.floor(note.timestamp / 60)}:{(note.timestamp % 60).toString().padStart(2, '0')}
                              </Badge>
                            </div>
                            <p className="text-sm text-white/80">{note.text}</p>
                          </div>
                        ))}
                        {notes.filter(n => n.courseId === activePlayerCourse.id && n.lessonId === activeLesson.id).length === 0 && (
                          <p className="text-sm text-white/40 text-center py-8">Nenhuma anotação nesta aula.</p>
                        )}
                      </div>
                      <div className="mt-auto space-y-2">
                        <textarea 
                          placeholder="Faça uma anotação..." 
                          className="w-full bg-black/50 border border-white/10 rounded-md p-3 text-sm resize-none" 
                          rows={3}
                          value={noteText}
                          onChange={(e) => setNoteText(e.target.value)}
                        />
                        <Button 
                          className="w-full bg-primary text-black"
                          onClick={() => {
                            if (noteText.trim()) {
                              addNote({ courseId: activePlayerCourse.id, lessonId: activeLesson.id, timestamp: 120, text: noteText }); // Mock timestamp
                              setNoteText("");
                            }
                          }}
                        >
                          Salvar Anotação
                        </Button>
                      </div>
                    </div>
                  )}
                  {activeSidebarTab === 'forum' && activeLesson && (
                    <div className="p-4 flex flex-col h-full">
                      <div className="flex-1 space-y-4 mb-4">
                        {forumQuestions.filter(q => q.courseId === activePlayerCourse.id && q.lessonId === activeLesson.id).map(q => (
                          <div key={q.id} className="p-4 bg-white/5 rounded-lg border border-white/10 space-y-3">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6"><AvatarFallback className="text-[10px]">{q.user[0]}</AvatarFallback></Avatar>
                              <span className="text-xs font-bold">{q.user}</span>
                              <span className="text-[10px] text-white/40 ml-auto">{new Date(q.createdAt).toLocaleDateString()}</span>
                            </div>
                            <p className="text-sm">{q.text}</p>
                            {q.answer && (
                              <div className={`p-3 rounded-lg text-sm ${q.isOfficial ? 'bg-primary/10 border border-primary/30' : 'bg-black/50'}`}>
                                {q.isOfficial && <Badge className="bg-primary text-black text-[10px] mb-2">Resposta Oficial</Badge>}
                                <p className="text-white/80">{q.answer}</p>
                              </div>
                            )}
                          </div>
                        ))}
                        {forumQuestions.filter(q => q.courseId === activePlayerCourse.id && q.lessonId === activeLesson.id).length === 0 && (
                          <p className="text-sm text-white/40 text-center py-8">Nenhuma dúvida nesta aula.</p>
                        )}
                      </div>
                      <div className="mt-auto space-y-2">
                        <textarea 
                          placeholder="Qual a sua dúvida?" 
                          className="w-full bg-black/50 border border-white/10 rounded-md p-3 text-sm resize-none" 
                          rows={3}
                          value={forumQuestionText}
                          onChange={(e) => setForumQuestionText(e.target.value)}
                        />
                        <Button 
                          className="w-full bg-primary text-black"
                          onClick={() => {
                            if (forumQuestionText.trim()) {
                              addForumQuestion({ courseId: activePlayerCourse.id, lessonId: activeLesson.id, user: "Você", text: forumQuestionText });
                              setForumQuestionText("");
                            }
                          }}
                        >
                          Enviar Dúvida
                        </Button>
                      </div>
                    </div>
                  )}
                </ScrollArea>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

function SchoolPlans({ onSubscribe }: { onSubscribe: (planId: string) => void }) {
  const { plans } = useSchool();

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold font-serif italic">Escolha seu Plano</h2>
        <p className="text-white/60">Tenha acesso ilimitado a todos os cursos e trilhas de aprendizado da Escola IDE. Invista no seu crescimento espiritual.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map(plan => (
          <Card key={plan.id} className={`bg-zinc-900 border-white/10 relative overflow-hidden ${plan.type === 'family' ? 'border-primary/50 shadow-[0_0_30px_rgba(170,255,0,0.1)]' : ''}`}>
            {plan.type === 'family' && (
              <div className="absolute top-0 inset-x-0 bg-primary text-black text-center text-xs font-bold py-1 uppercase tracking-wider">
                Mais Popular
              </div>
            )}
            <CardContent className={`p-8 ${plan.type === 'family' ? 'pt-10' : ''} flex flex-col h-full`}>
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-primary">R$ {plan.price.toFixed(2).replace('.', ',')}</span>
                  <span className="text-white/40">/{plan.interval === 'monthly' ? 'mês' : 'ano'}</span>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full mt-8 ${plan.type === 'family' ? 'bg-primary text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
                onClick={() => onSubscribe(plan.id)}
              >
                Assinar Agora
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function SchoolAchievements() {
  const { badges } = useSchool();
  
  const allBadges = [
    { id: "b1", name: "Primeiro Passo", description: "Iniciou seu primeiro curso.", icon: "🏃" },
    { id: "b2", name: "Estudioso", description: "Concluiu seu primeiro curso.", icon: "📚" },
    { id: "b3", name: "Maratonista", description: "Concluiu 3 cursos.", icon: "🏅" },
    { id: "b4", name: "Mestre", description: "Concluiu uma trilha completa.", icon: "👑" },
    { id: "b5", name: "Ajudador", description: "Respondeu a uma dúvida no fórum.", icon: "🤝" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Suas Conquistas</h2>
          <p className="text-white/60">Desbloqueie badges ao progredir na Escola IDE.</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-primary">{badges.length}</p>
          <p className="text-xs text-white/40">Badges Desbloqueados</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {allBadges.map(badge => {
          const earned = badges.find(b => b.id === badge.id);
          return (
            <Card key={badge.id} className={`bg-zinc-900 border-white/10 text-center transition-all ${earned ? 'border-primary/50 shadow-[0_0_15px_rgba(255,215,0,0.1)]' : 'opacity-50 grayscale'}`}>
              <CardContent className="p-6 flex flex-col items-center justify-center space-y-4">
                <div className={`text-5xl ${earned ? 'animate-bounce-slow' : ''}`}>
                  {badge.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm">{badge.name}</h3>
                  <p className="text-[10px] text-white/60 mt-1">{badge.description}</p>
                </div>
                {earned && (
                  <Badge className="bg-primary/20 text-primary border-none text-[10px]">
                    {new Date(earned.earnedAt).toLocaleDateString()}
                  </Badge>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function AdminView() {
  const [activeAdminTab, setActiveAdminTab] = React.useState("dashboard")
  const { courses, enrollments } = useSchool();

  const activeStudents = new Set(enrollments.map(e => e.courseId)).size; // Simplified metric
  const totalCompletions = enrollments.filter(e => e.progress === 100).length;
  const totalEnrollments = enrollments.length;
  const completionRate = totalEnrollments > 0 ? Math.round((totalCompletions / totalEnrollments) * 100) : 0;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Painel de Comando</h1>
          <p className="text-white/60">Visão geral estratégica da Igreja Coroado • 2026</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-white/10">
            <Download className="mr-2 h-4 w-4" />
            Relatórios
          </Button>
          <Button className="bg-primary text-black">
            <Plus className="mr-2 h-4 w-4" />
            Novo Registro
          </Button>
        </div>
      </div>

      <Tabs value={activeAdminTab} onValueChange={setActiveAdminTab} className="space-y-8">
        <ScrollArea className="w-full whitespace-nowrap pb-4">
          <TabsList className="bg-zinc-900 border border-white/10 p-1 rounded-full inline-flex w-max">
            <TabsTrigger value="dashboard" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Dashboard</TabsTrigger>
            <TabsTrigger value="goals" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Metas e Crescimento</TabsTrigger>
            <TabsTrigger value="calendar" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Calendário 2026</TabsTrigger>
            <TabsTrigger value="planning" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Planejamento e Ação</TabsTrigger>
            <TabsTrigger value="members" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Membros e Liderança</TabsTrigger>
            <TabsTrigger value="school" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Escola IDE</TabsTrigger>
            <TabsTrigger value="jornada" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Jornada IDE</TabsTrigger>
          </TabsList>
        </ScrollArea>

        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "Células Ativas", value: "84", meta: "Meta: 100", progress: 84, color: "text-primary" },
              { label: "Frequência Média", value: "88%", meta: "Meta: 90%", progress: 88, color: "text-secondary" },
              { label: "Batismos", value: "120", meta: "Meta: 200", progress: 60, color: "text-primary" },
              { label: "Receita Mensal", value: "R$ 45k", meta: "Meta: R$ 50k", progress: 90, color: "text-secondary" },
            ].map((kpi, i) => (
              <Card key={i} className="bg-zinc-900 border-white/10">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <p className="text-xs uppercase tracking-wider text-white/40 font-bold">{kpi.label}</p>
                    <Badge variant="outline" className="border-white/10 text-[10px]">{kpi.progress}% da Meta</Badge>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight">{kpi.value}</h3>
                  <div className="space-y-1">
                    <div className="h-1 bg-black rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${kpi.progress}%` }} />
                    </div>
                    <p className="text-[10px] text-white/40">{kpi.meta}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2 bg-zinc-900 border-white/10">
              <CardHeader>
                <CardTitle>Curva de Crescimento (Histórico)</CardTitle>
                <CardDescription>Evolução anual de células e liderança</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-end justify-center pb-4 border-b border-white/5 relative">
                {/* Placeholder for Chart */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white/20 font-bold uppercase tracking-widest">Gráfico de Crescimento</p>
                </div>
                <div className="w-full flex justify-between text-xs text-white/40 px-4">
                  <span>2023</span>
                  <span>2024</span>
                  <span>2025</span>
                  <span>2026</span>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-zinc-900 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg">Funil de Engajamento (Escola IDE)</CardTitle>
                  <CardDescription>Distribuição dos membros por nível de atividade.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "Sem Acesso", value: 450, color: "bg-white/20" },
                    { label: "Explorador (1 acesso)", value: 320, color: "bg-blue-500" },
                    { label: "Iniciante (1 curso)", value: 210, color: "bg-yellow-500" },
                    { label: "Ativo (2+ cursos)", value: 150, color: "bg-primary" },
                    { label: "Avançado (Concluiu trilha)", value: 80, color: "bg-green-500" },
                  ].map((level, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-white/80">{level.label}</span>
                        <span className="font-bold">{level.value}</span>
                      </div>
                      <div className="h-2 bg-black rounded-full overflow-hidden">
                        <div className={`h-full ${level.color}`} style={{ width: `${(level.value / 450) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-red-400 mb-2">
                      <AlertTriangle className="h-4 w-4" />
                      <span className="text-sm font-bold">Alerta de Esfriamento</span>
                    </div>
                    <p className="text-xs text-white/60 mb-3">120 membros não acessam a plataforma há mais de 15 dias.</p>
                    <Button size="sm" variant="outline" className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10">Notificar Líderes de Célula</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg">Escola IDE</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Cursos Publicados</span>
                      <span className="font-bold">{courses.filter(c => c.status === 'published').length}</span>
                    </div>
                    <div className="h-2 bg-black rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[100%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Taxa de Conclusão</span>
                      <span className="font-bold">{completionRate}%</span>
                    </div>
                    <div className="h-2 bg-black rounded-full overflow-hidden">
                      <div className="h-full bg-secondary" style={{ width: `${completionRate}%` }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Total de Matrículas</span>
                      <span className="font-bold">{totalEnrollments}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <Card className="bg-zinc-900 border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Metas e Estratégia 2026</CardTitle>
                <CardDescription>Acompanhamento de resultados e indicadores chave.</CardDescription>
              </div>
              <Button size="sm" className="bg-primary text-black">Nova Meta</Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: "Crescer", desc: "Ganhar pessoas para Jesus", sub: "Ênfase na crescer dos membros", period: "SET/OUT/NOV", color: "border-red-500/50" },
                { title: "Cuidar", desc: "Consolidar a nova vida em Cristo", sub: "Ênfase na cuidar dos membros", period: "DEZ/JAN/FEV", color: "border-blue-500/50" },
                { title: "Consolidar", desc: "Discipulado cristão e maturidade", sub: "Ênfase na consolidar dos membros", period: "MAR/ABR/MAI", color: "border-green-500/50" },
                { title: "Celebrar", desc: "Liderança saudável que gera multiplicação", sub: "Ênfase na celebrar dos membros", period: "JUN/JUL/AGO", color: "border-yellow-500/50" },
              ].map((goal, i) => (
                <div key={i} className={`p-4 rounded-xl bg-white/5 border ${goal.color} flex justify-between items-start`}>
                  <div>
                    <h3 className="font-bold text-lg text-white">{goal.title}</h3>
                    <p className="text-sm text-white/80">{goal.desc}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-white/60">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      {goal.sub}
                    </div>
                  </div>
                  <Badge variant="outline" className="border-white/20 text-[10px]">{goal.period}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="planning" className="space-y-6">
          <Card className="bg-zinc-900 border-white/10">
            <CardHeader>
              <CardTitle>Resumo do Planejamento</CardTitle>
              <CardDescription>Acompanhamento geral das tarefas e status.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "A FAZER", value: "12", icon: CheckSquare, color: "text-white/60" },
                  { label: "FAZENDO", value: "5", icon: Clock, color: "text-secondary" },
                  { label: "STANDBY", value: "2", icon: Bell, color: "text-yellow-500" },
                  { label: "TRAVADO", value: "1", icon: X, color: "text-red-500" },
                  { label: "ATRASADO", value: "3", icon: TrendingUp, color: "text-red-400" },
                  { label: "CONCLUÍDO", value: "45", icon: CheckCircle2, color: "text-primary" },
                ].map((status, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 text-center flex flex-col items-center justify-center gap-2">
                    <status.icon className={`h-5 w-5 ${status.color}`} />
                    <p className="text-2xl font-bold">{status.value}</p>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-white/40">{status.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="members" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-zinc-900 border-white/10">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase text-white/40 font-bold">Total Membros</p>
                  <p className="text-3xl font-bold text-primary mt-1">1,248</p>
                </div>
                <Users className="h-8 w-8 text-white/10" />
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-white/10">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase text-white/40 font-bold">Voluntários</p>
                  <p className="text-3xl font-bold text-secondary mt-1">450</p>
                </div>
                <Heart className="h-8 w-8 text-white/10" />
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-white/10">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase text-white/40 font-bold">Líderes</p>
                  <p className="text-3xl font-bold text-primary mt-1">156</p>
                </div>
                <Shield className="h-8 w-8 text-white/10" />
              </CardContent>
            </Card>
          </div>

          <Card className="bg-zinc-900 border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Membros e Liderança</CardTitle>
                <CardDescription>Gestão de cadastro e hierarquia da igreja.</CardDescription>
              </div>
              <Button size="sm" className="bg-primary text-black">Novo Cadastro</Button>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                  <Input placeholder="Buscar por nome, email ou ministério..." className="pl-10 bg-black border-white/10" />
                </div>
                <Button variant="outline" className="border-white/10">Cargos: Todos</Button>
                <Button variant="outline" className="border-white/10">Status: Todos</Button>
              </div>

              <Table>
                <TableHeader className="border-white/10">
                  <TableRow className="hover:bg-transparent border-white/10">
                    <TableHead className="text-white/40">Nome</TableHead>
                    <TableHead className="text-white/40">Cargo/Função</TableHead>
                    <TableHead className="text-white/40">Célula</TableHead>
                    <TableHead className="text-white/40">Status</TableHead>
                    <TableHead className="text-right text-white/40">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { name: "Marcos Pereira Hubner", role: "ADMIN, MEMBRO", cell: "Sede", status: "Aprovado" },
                    { name: "Ana Silva", role: "LÍDER DE CÉLULA", cell: "Esperança", status: "Aprovado" },
                    { name: "João Costa", role: "VOLUNTÁRIO", cell: "Fé", status: "Pendente" },
                  ].map((row, i) => (
                    <TableRow key={i} className="border-white/5 hover:bg-white/5">
                      <TableCell className="font-medium flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-[10px]">{row.name.substring(0,2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        {row.name}
                      </TableCell>
                      <TableCell className="text-xs text-white/60">{row.role}</TableCell>
                      <TableCell>{row.cell}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={row.status === "Aprovado" ? "border-primary/50 text-primary" : "border-secondary/50 text-secondary"}>
                          {row.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Editar</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="school" className="space-y-6">
          <AdminSchoolTab />
        </TabsContent>
        <TabsContent value="jornada" className="space-y-6">
          <AdminJornadaTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function AdminJornadaTab() {
  const { tracks, courses, addTrack } = useSchool();
  const [isCreating, setIsCreating] = React.useState(false);
  const [newTrack, setNewTrack] = React.useState<LearningTrack>({ id: '', title: '', description: '', courseIds: [] });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Trilhas de Aprendizado (A Jornada)</h2>
          <p className="text-white/60">Crie e gerencie caminhos sequenciais de desenvolvimento.</p>
        </div>
        <Button className="bg-primary text-black" onClick={() => {
          setNewTrack({ id: `t${Date.now()}`, title: '', description: '', courseIds: [] });
          setIsCreating(true);
        }}>
          <Plus className="mr-2 h-4 w-4" /> Nova Trilha
        </Button>
      </div>

      {isCreating && (
        <Card className="bg-zinc-900 border-white/10">
          <CardHeader>
            <CardTitle>Criar Nova Trilha</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-bold">Título da Trilha</label>
              <Input 
                value={newTrack.title} 
                onChange={e => setNewTrack({...newTrack, title: e.target.value})} 
                className="bg-black border-white/10" 
                placeholder="Ex: Trilha de Liderança"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">Descrição</label>
              <textarea 
                value={newTrack.description} 
                onChange={e => setNewTrack({...newTrack, description: e.target.value})} 
                className="w-full bg-black border border-white/10 rounded-md p-3 text-sm min-h-[100px]" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">Cursos da Trilha (Selecione na ordem)</label>
              <div className="grid gap-2">
                {courses.map(course => (
                  <div key={course.id} className="flex items-center gap-2 p-2 rounded bg-white/5 border border-white/10">
                    <input 
                      type="checkbox" 
                      checked={newTrack.courseIds.includes(course.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setNewTrack({...newTrack, courseIds: [...newTrack.courseIds, course.id]});
                        } else {
                          setNewTrack({...newTrack, courseIds: newTrack.courseIds.filter(id => id !== course.id)});
                        }
                      }}
                    />
                    <span className="text-sm">{course.title}</span>
                    {newTrack.courseIds.includes(course.id) && (
                      <Badge className="ml-auto bg-primary/20 text-primary border-none">
                        Passo {newTrack.courseIds.indexOf(course.id) + 1}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setIsCreating(false)}>Cancelar</Button>
              <Button className="bg-primary text-black" onClick={() => {
                if (newTrack.title && newTrack.courseIds.length > 0) {
                  addTrack(newTrack);
                  setIsCreating(false);
                }
              }}>Salvar Trilha</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {tracks.map(track => (
          <Card key={track.id} className="bg-zinc-900 border-white/10">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{track.title}</CardTitle>
              <CardDescription>{track.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {track.courseIds.map((courseId, index) => {
                  const course = courses.find(c => c.id === courseId);
                  if (!course) return null;
                  return (
                    <div key={courseId} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-zinc-900 text-white/60 group-[.is-active]:bg-primary group-[.is-active]:text-black group-[.is-active]:border-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-white/5 shadow-sm">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                          <div className="font-bold text-white">{course.title}</div>
                        </div>
                        <div className="text-xs text-white/60">{course.category}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function AdminSchoolTab() {
  const [activeTab, setActiveTab] = React.useState("courses");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
      <TabsList className="bg-zinc-900 border border-white/10 p-1 rounded-full">
        <TabsTrigger value="courses" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Cursos</TabsTrigger>
        <TabsTrigger value="quizzes" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Quizzes</TabsTrigger>
        <TabsTrigger value="support" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Central de Suporte</TabsTrigger>
        <TabsTrigger value="finance" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Financeiro</TabsTrigger>
        <TabsTrigger value="automations" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Notificações</TabsTrigger>
      </TabsList>
      
      <TabsContent value="courses" className="space-y-6">
        <AdminCourses />
      </TabsContent>
      <TabsContent value="quizzes" className="space-y-6">
        <AdminQuizzes />
      </TabsContent>
      <TabsContent value="support" className="space-y-6">
        <AdminSupport />
      </TabsContent>
      <TabsContent value="finance" className="space-y-6">
        <AdminFinance />
      </TabsContent>
      <TabsContent value="automations" className="space-y-6">
        <AdminAutomations />
      </TabsContent>
    </Tabs>
  );
}

function AdminFinance() {
  const { plans, transactions, coupons } = useSchool();
  const mrr = transactions.filter(t => t.type === 'subscription').reduce((acc, t) => acc + t.amount, 0);
  const totalRevenue = transactions.reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Dashboard Financeiro</h2>
          <p className="text-white/60">Acompanhamento de MRR, assinaturas e vendas avulsas.</p>
        </div>
        <Button className="bg-primary text-black"><Plus className="mr-2 h-4 w-4" /> Novo Plano</Button>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <Card className="bg-zinc-900 border-white/10">
          <CardContent className="p-6">
            <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold mb-2">MRR (Receita Recorrente)</p>
            <p className="text-3xl font-bold tracking-tight text-primary">R$ {mrr.toFixed(2).replace('.', ',')}</p>
            <p className="text-xs text-green-400 mt-2 flex items-center gap-1"><TrendingUp className="h-3 w-3" /> +12% este mês</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-white/10">
          <CardContent className="p-6">
            <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold mb-2">Receita Total</p>
            <p className="text-3xl font-bold tracking-tight text-white">R$ {totalRevenue.toFixed(2).replace('.', ',')}</p>
            <p className="text-xs text-white/60 mt-2">Vendas de cursos e planos</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-white/10">
          <CardContent className="p-6">
            <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold mb-2">Assinantes Ativos</p>
            <p className="text-3xl font-bold tracking-tight text-secondary">42</p>
            <p className="text-xs text-white/60 mt-2">Churn: 2.5%</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-white/10">
          <CardContent className="p-6">
            <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold mb-2">LTV Médio</p>
            <p className="text-3xl font-bold tracking-tight text-white">R$ 350,00</p>
            <p className="text-xs text-white/60 mt-2">Tempo médio: 12 meses</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-zinc-900 border-white/10">
          <CardHeader>
            <CardTitle>Planos de Assinatura</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {plans.map(plan => (
              <div key={plan.id} className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                <div>
                  <h4 className="font-bold">{plan.name}</h4>
                  <p className="text-xs text-white/60">{plan.interval === 'monthly' ? 'Mensal' : 'Anual'} • {plan.type === 'individual' ? 'Individual' : 'Família'}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">R$ {plan.price.toFixed(2).replace('.', ',')}</p>
                  <Button variant="ghost" size="sm" className="text-xs h-6 mt-1 text-white/40 hover:text-white">Editar</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-white/10">
          <CardHeader>
            <CardTitle>Transações Recentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {transactions.map(tx => (
              <div key={tx.id} className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center ${tx.method === 'pix' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                    {tx.method === 'pix' ? <CheckSquare className="h-4 w-4" /> : <CreditCard className="h-4 w-4" />}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{tx.type === 'subscription' ? 'Assinatura' : 'Curso Avulso'}</p>
                    <p className="text-xs text-white/60">{new Date(tx.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">R$ {tx.amount.toFixed(2).replace('.', ',')}</p>
                  <Badge className="bg-green-500/20 text-green-400 border-none text-[10px]">Concluído</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function AdminAutomations() {
  const { automations } = useSchool();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Notificações e Automações</h2>
          <p className="text-white/60">Configure réguas de e-mail e push notifications.</p>
        </div>
        <Button className="bg-primary text-black"><Plus className="mr-2 h-4 w-4" /> Nova Regra</Button>
      </div>

      <div className="grid gap-4">
        {automations.map(rule => (
          <Card key={rule.id} className="bg-zinc-900 border-white/10">
            <CardContent className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center ${rule.active ? 'bg-primary/20 text-primary' : 'bg-white/5 text-white/40'}`}>
                  {rule.action === 'send_email' ? <Mail className="h-6 w-6" /> : <Bell className="h-6 w-6" />}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{rule.name}</h4>
                  <p className="text-sm text-white/60">
                    Gatilho: <span className="text-white">{rule.trigger === 'new_enrollment' ? 'Nova Matrícula' : 'Carrinho Abandonado'}</span>
                  </p>
                  <p className="text-sm text-white/60">
                    Ação: <span className="text-white">{rule.action === 'send_email' ? 'Enviar E-mail' : 'Enviar Push Notification'}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge className={rule.active ? 'bg-green-500/20 text-green-400 border-none' : 'bg-white/10 text-white/40 border-none'}>
                  {rule.active ? 'Ativo' : 'Inativo'}
                </Badge>
                <Button variant="outline" size="sm" className="border-white/10">Configurar</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function AdminCourses() {
  const { courses, addCourse, updateCourse, deleteCourse } = useSchool();
  const [editingCourse, setEditingCourse] = React.useState<Course | null>(null);
  const [editingLesson, setEditingLesson] = React.useState<{ moduleId: string, lesson: Lesson } | null>(null);
  const [isGeneratingAI, setIsGeneratingAI] = React.useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCourse) {
      if (courses.find(c => c.id === editingCourse.id)) {
        updateCourse(editingCourse);
      } else {
        addCourse(editingCourse);
      }
      setEditingCourse(null);
    }
  };

  const handleNewCourse = () => {
    setEditingCourse({
      id: `c${Date.now()}`,
      title: "Novo Curso",
      description: "",
      level: "Iniciante",
      duration: "0h",
      students: 0,
      img: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=600&auto=format&fit=crop",
      professor: "",
      status: "draft",
      category: "Geral",
      learningOutcomes: [],
      rating: 0,
      modules: []
    });
  };

  const handleSaveLesson = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCourse && editingLesson) {
      const updatedModules = editingCourse.modules.map(m => {
        if (m.id === editingLesson.moduleId) {
          const lessonExists = m.lessons.find(l => l.id === editingLesson.lesson.id);
          if (lessonExists) {
            return { ...m, lessons: m.lessons.map(l => l.id === editingLesson.lesson.id ? editingLesson.lesson : l) };
          } else {
            return { ...m, lessons: [...m.lessons, editingLesson.lesson] };
          }
        }
        return m;
      });
      setEditingCourse({ ...editingCourse, modules: updatedModules });
      setEditingLesson(null);
    }
  };

  const generateAIContent = async () => {
    if (!editingLesson) return;
    setIsGeneratingAI(true);
    // Simulate AI processing (Whisper + Gemini)
    setTimeout(() => {
      setEditingLesson({
        ...editingLesson,
        lesson: {
          ...editingLesson.lesson,
          summary: `Resumo gerado por IA para a aula "${editingLesson.lesson.title}". Esta aula aborda os principais conceitos e práticas essenciais para o desenvolvimento do aluno neste módulo.`,
          transcript: `[00:00] Olá, bem-vindos a mais uma aula.\n[00:05] Hoje vamos falar sobre ${editingLesson.lesson.title}.\n[00:15] É muito importante prestar atenção aos detalhes...`,
          subtitles: [
            { time: "0:00", text: "Olá, bem-vindos a mais uma aula." },
            { time: "0:05", text: `Hoje vamos falar sobre ${editingLesson.lesson.title}.` },
            { time: "0:15", text: "É muito importante prestar atenção aos detalhes..." }
          ]
        }
      });
      setIsGeneratingAI(false);
    }, 2000);
  };

  if (editingLesson) {
    return (
      <Card className="bg-zinc-900 border-white/10">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Editar Aula</CardTitle>
            <CardDescription>Configure o vídeo e os recursos da aula.</CardDescription>
          </div>
          <Button variant="ghost" onClick={() => setEditingLesson(null)}><X className="h-4 w-4" /></Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSaveLesson} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold">Título da Aula</label>
                <Input value={editingLesson.lesson.title} onChange={e => setEditingLesson({...editingLesson, lesson: {...editingLesson.lesson, title: e.target.value}})} className="bg-black border-white/10" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">ID do Vídeo (YouTube)</label>
                <Input value={editingLesson.lesson.videoId} onChange={e => setEditingLesson({...editingLesson, lesson: {...editingLesson.lesson, videoId: e.target.value}})} className="bg-black border-white/10" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Duração (ex: 15:00)</label>
                <Input value={editingLesson.lesson.duration} onChange={e => setEditingLesson({...editingLesson, lesson: {...editingLesson.lesson, duration: e.target.value}})} className="bg-black border-white/10" required />
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /> Recursos de IA</h4>
                <Button type="button" variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={generateAIContent} disabled={isGeneratingAI}>
                  {isGeneratingAI ? 'Processando...' : 'Gerar Transcrição e Resumo (Whisper)'}
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Resumo Inteligente</label>
                  <textarea 
                    value={editingLesson.lesson.summary || ''} 
                    onChange={e => setEditingLesson({...editingLesson, lesson: {...editingLesson.lesson, summary: e.target.value}})} 
                    className="w-full min-h-[80px] p-3 rounded-md bg-black border border-white/10 text-sm" 
                    placeholder="Resumo gerado por IA..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Transcrição</label>
                  <textarea 
                    value={editingLesson.lesson.transcript || ''} 
                    onChange={e => setEditingLesson({...editingLesson, lesson: {...editingLesson.lesson, transcript: e.target.value}})} 
                    className="w-full min-h-[100px] p-3 rounded-md bg-black border border-white/10 text-sm font-mono" 
                    placeholder="Transcrição do vídeo..."
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end gap-2">
              <Button type="button" variant="outline" className="border-white/10" onClick={() => setEditingLesson(null)}>Cancelar</Button>
              <Button type="submit" className="bg-primary text-black">Salvar Aula</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  }

  if (editingCourse) {
    return (
      <Card className="bg-zinc-900 border-white/10">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>{courses.find(c => c.id === editingCourse.id) ? "Editar Curso" : "Novo Curso"}</CardTitle>
            <CardDescription>Preencha os detalhes do curso.</CardDescription>
          </div>
          <Button variant="ghost" onClick={() => setEditingCourse(null)}><X className="h-4 w-4" /></Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold">Título</label>
                <Input value={editingCourse.title} onChange={e => setEditingCourse({...editingCourse, title: e.target.value})} className="bg-black border-white/10" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Professor</label>
                <Input value={editingCourse.professor} onChange={e => setEditingCourse({...editingCourse, professor: e.target.value})} className="bg-black border-white/10" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Categoria</label>
                <Input value={editingCourse.category} onChange={e => setEditingCourse({...editingCourse, category: e.target.value})} className="bg-black border-white/10" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Nível</label>
                <Input value={editingCourse.level} onChange={e => setEditingCourse({...editingCourse, level: e.target.value})} className="bg-black border-white/10" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Duração</label>
                <Input value={editingCourse.duration} onChange={e => setEditingCourse({...editingCourse, duration: e.target.value})} className="bg-black border-white/10" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Status</label>
                <select 
                  value={editingCourse.status} 
                  onChange={e => setEditingCourse({...editingCourse, status: e.target.value as 'published' | 'draft'})}
                  className="w-full h-10 px-3 rounded-md bg-black border border-white/10 text-sm"
                >
                  <option value="draft">Rascunho</option>
                  <option value="published">Publicado</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">URL da Imagem</label>
              <Input value={editingCourse.img} onChange={e => setEditingCourse({...editingCourse, img: e.target.value})} className="bg-black border-white/10" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">Descrição</label>
              <textarea 
                value={editingCourse.description} 
                onChange={e => setEditingCourse({...editingCourse, description: e.target.value})} 
                className="w-full min-h-[100px] p-3 rounded-md bg-black border border-white/10 text-sm" 
                required 
              />
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Módulos e Aulas</h3>
                <Button type="button" variant="outline" size="sm" onClick={() => {
                  const newModuleId = `m${Date.now()}`;
                  setEditingCourse({...editingCourse, modules: [...editingCourse.modules, { id: newModuleId, title: "Novo Módulo", lessons: [] }]});
                }}>Adicionar Módulo</Button>
              </div>
              
              <div className="space-y-4">
                {editingCourse.modules.map((mod, mIdx) => (
                  <div key={mod.id} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-4">
                    <div className="flex items-center justify-between">
                      <Input 
                        value={mod.title} 
                        onChange={e => {
                          const newModules = [...editingCourse.modules];
                          newModules[mIdx].title = e.target.value;
                          setEditingCourse({...editingCourse, modules: newModules});
                        }} 
                        className="bg-black border-white/10 max-w-[300px]" 
                      />
                      <Button type="button" variant="ghost" size="sm" className="text-primary hover:text-primary/80" onClick={() => {
                        setEditingLesson({
                          moduleId: mod.id,
                          lesson: { id: `l${Date.now()}`, title: "Nova Aula", videoId: "", duration: "00:00" }
                        });
                      }}>
                        <Plus className="h-4 w-4 mr-2" /> Adicionar Aula
                      </Button>
                    </div>
                    
                    <div className="space-y-2 pl-4 border-l-2 border-white/10">
                      {mod.lessons.map(lesson => (
                        <div key={lesson.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5">
                          <div className="flex items-center gap-3">
                            <PlayCircle className="h-4 w-4 text-white/40" />
                            <span className="text-sm">{lesson.title}</span>
                            {lesson.summary && <Badge className="bg-primary/20 text-primary border-none text-[10px]">IA</Badge>}
                          </div>
                          <Button type="button" variant="ghost" size="sm" onClick={() => setEditingLesson({ moduleId: mod.id, lesson })}>Editar</Button>
                        </div>
                      ))}
                      {mod.lessons.length === 0 && <p className="text-xs text-white/40 italic">Nenhuma aula neste módulo.</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end gap-2">
              <Button type="button" variant="outline" className="border-white/10" onClick={() => setEditingCourse(null)}>Cancelar</Button>
              <Button type="submit" className="bg-primary text-black">Salvar Curso</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gerenciamento de Cursos</h2>
        <Button className="bg-primary text-black" onClick={handleNewCourse}>
          <Plus className="mr-2 h-4 w-4" />
          Novo Curso
        </Button>
      </div>

      <Card className="bg-zinc-900 border-white/10">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-transparent">
                <TableHead className="text-white/60">Curso</TableHead>
                <TableHead className="text-white/60">Categoria</TableHead>
                <TableHead className="text-white/60">Alunos</TableHead>
                <TableHead className="text-white/60">Status</TableHead>
                <TableHead className="text-right text-white/60">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id} className="border-white/10 hover:bg-white/5">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-zinc-800 overflow-hidden">
                        <img src={course.img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <p className="font-bold">{course.title}</p>
                        <p className="text-xs text-white/40">{course.professor}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{course.category}</TableCell>
                  <TableCell>{course.students}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={course.status === 'published' ? 'border-primary text-primary' : 'border-white/20 text-white/60'}>
                      {course.status === 'published' ? 'Publicado' : 'Rascunho'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" onClick={() => setEditingCourse(course)}>Editar</Button>
                      <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-400/10" onClick={() => deleteCourse(course.id)}>Excluir</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function AdminQuizzes() {
  const { courses, updateCourse } = useSchool();
  const [selectedLesson, setSelectedLesson] = React.useState<{courseId: string, moduleId: string, lesson: Lesson} | null>(null);

  if (selectedLesson) {
    const quiz = selectedLesson.lesson.quiz || { id: `q${Date.now()}`, passingScore: 70, questions: [], openQuestions: [] };
    return (
      <Card className="bg-zinc-900 border-white/10">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Editar Quiz: {selectedLesson.lesson.title}</CardTitle>
            <CardDescription>Configure as questões e a nota de aprovação.</CardDescription>
          </div>
          <Button variant="ghost" onClick={() => setSelectedLesson(null)}><X className="h-4 w-4" /></Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold">Nota Mínima para Aprovação (%)</label>
            <Input 
              type="number" 
              min="0" max="100" 
              value={quiz.passingScore} 
              onChange={(e) => {
                const updatedLesson = { ...selectedLesson.lesson, quiz: { ...quiz, passingScore: Number(e.target.value) } };
                setSelectedLesson({ ...selectedLesson, lesson: updatedLesson });
              }}
              className="bg-black border-white/10 w-32" 
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold">Questões de Múltipla Escolha</h3>
            {quiz.questions.map((q, qIdx) => (
              <Card key={q.id} className="bg-black/50 border-white/10">
                <CardContent className="p-4 space-y-4">
                  <div className="flex justify-between items-start">
                    <Input 
                      value={q.question} 
                      onChange={(e) => {
                        const newQuestions = [...quiz.questions];
                        newQuestions[qIdx].question = e.target.value;
                        const updatedLesson = { ...selectedLesson.lesson, quiz: { ...quiz, questions: newQuestions } };
                        setSelectedLesson({ ...selectedLesson, lesson: updatedLesson });
                      }}
                      className="bg-black border-white/10 font-bold"
                      placeholder="Digite a pergunta"
                    />
                    <Button variant="ghost" size="icon" className="text-red-400 ml-2" onClick={() => {
                      const newQuestions = quiz.questions.filter((_, i) => i !== qIdx);
                      const updatedLesson = { ...selectedLesson.lesson, quiz: { ...quiz, questions: newQuestions } };
                      setSelectedLesson({ ...selectedLesson, lesson: updatedLesson });
                    }}><X className="h-4 w-4" /></Button>
                  </div>
                  <div className="space-y-2 pl-4">
                    {q.options.map((opt, optIdx) => (
                      <div key={optIdx} className="flex items-center gap-2">
                        <input 
                          type="radio" 
                          name={`correct-${q.id}`} 
                          checked={q.correctAnswerIndex === optIdx}
                          onChange={() => {
                            const newQuestions = [...quiz.questions];
                            newQuestions[qIdx].correctAnswerIndex = optIdx;
                            const updatedLesson = { ...selectedLesson.lesson, quiz: { ...quiz, questions: newQuestions } };
                            setSelectedLesson({ ...selectedLesson, lesson: updatedLesson });
                          }}
                        />
                        <Input 
                          value={opt} 
                          onChange={(e) => {
                            const newQuestions = [...quiz.questions];
                            newQuestions[qIdx].options[optIdx] = e.target.value;
                            const updatedLesson = { ...selectedLesson.lesson, quiz: { ...quiz, questions: newQuestions } };
                            setSelectedLesson({ ...selectedLesson, lesson: updatedLesson });
                          }}
                          className="bg-black border-white/10 h-8 text-sm"
                          placeholder={`Alternativa ${optIdx + 1}`}
                        />
                      </div>
                    ))}
                    <Button variant="ghost" size="sm" className="text-xs text-primary" onClick={() => {
                      const newQuestions = [...quiz.questions];
                      newQuestions[qIdx].options.push("");
                      const updatedLesson = { ...selectedLesson.lesson, quiz: { ...quiz, questions: newQuestions } };
                      setSelectedLesson({ ...selectedLesson, lesson: updatedLesson });
                    }}>+ Adicionar Alternativa</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button variant="outline" className="w-full border-dashed border-white/20" onClick={() => {
              const newQuestions = [...quiz.questions, { id: `qq${Date.now()}`, question: "", options: ["", ""], correctAnswerIndex: 0 }];
              const updatedLesson = { ...selectedLesson.lesson, quiz: { ...quiz, questions: newQuestions } };
              setSelectedLesson({ ...selectedLesson, lesson: updatedLesson });
            }}>
              <Plus className="mr-2 h-4 w-4" /> Nova Questão Múltipla Escolha
            </Button>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              <h3 className="font-bold">Questões Abertas (Correção por IA)</h3>
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            {(quiz.openQuestions || []).map((q, qIdx) => (
              <Card key={q.id} className="bg-black/50 border-white/10">
                <CardContent className="p-4 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-white/60">Pergunta</label>
                        <Input 
                          value={q.question} 
                          onChange={(e) => {
                            const newQuestions = [...(quiz.openQuestions || [])];
                            newQuestions[qIdx].question = e.target.value;
                            const updatedLesson = { ...selectedLesson.lesson, quiz: { ...quiz, openQuestions: newQuestions } };
                            setSelectedLesson({ ...selectedLesson, lesson: updatedLesson });
                          }}
                          className="bg-black border-white/10 font-bold"
                          placeholder="Digite a pergunta aberta"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-white/60">Gabarito / Critérios de Correção (IA usará isso para avaliar)</label>
                        <textarea 
                          value={q.rubric} 
                          onChange={(e) => {
                            const newQuestions = [...(quiz.openQuestions || [])];
                            newQuestions[qIdx].rubric = e.target.value;
                            const updatedLesson = { ...selectedLesson.lesson, quiz: { ...quiz, openQuestions: newQuestions } };
                            setSelectedLesson({ ...selectedLesson, lesson: updatedLesson });
                          }}
                          className="w-full min-h-[80px] p-3 rounded-md bg-black border border-white/10 text-sm"
                          placeholder="Ex: O aluno deve mencionar X, Y e Z. A resposta deve demonstrar entendimento de..."
                        />
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-red-400 ml-4 shrink-0" onClick={() => {
                      const newQuestions = (quiz.openQuestions || []).filter((_, i) => i !== qIdx);
                      const updatedLesson = { ...selectedLesson.lesson, quiz: { ...quiz, openQuestions: newQuestions } };
                      setSelectedLesson({ ...selectedLesson, lesson: updatedLesson });
                    }}><X className="h-4 w-4" /></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button variant="outline" className="w-full border-dashed border-primary/50 text-primary hover:bg-primary/10" onClick={() => {
              const newQuestions = [...(quiz.openQuestions || []), { id: `oq${Date.now()}`, question: "", rubric: "" }];
              const updatedLesson = { ...selectedLesson.lesson, quiz: { ...quiz, openQuestions: newQuestions } };
              setSelectedLesson({ ...selectedLesson, lesson: updatedLesson });
            }}>
              <Plus className="mr-2 h-4 w-4" /> Nova Questão Aberta (IA)
            </Button>
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t border-white/10">
            <Button variant="outline" onClick={() => setSelectedLesson(null)}>Cancelar</Button>
            <Button className="bg-primary text-black" onClick={() => {
              const course = courses.find(c => c.id === selectedLesson.courseId);
              if (course) {
                const updatedCourse = {
                  ...course,
                  modules: course.modules.map(m => m.id === selectedLesson.moduleId ? {
                    ...m,
                    lessons: m.lessons.map(l => l.id === selectedLesson.lesson.id ? selectedLesson.lesson : l)
                  } : m)
                };
                updateCourse(updatedCourse);
                setSelectedLesson(null);
              }
            }}>Salvar Quiz</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-zinc-900 border-white/10">
      <CardHeader>
        <CardTitle>Gerenciamento de Quizzes</CardTitle>
        <CardDescription>Selecione uma aula para adicionar ou editar seu quiz.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {courses.map(course => (
            <div key={course.id} className="space-y-2">
              <h3 className="font-bold text-lg text-primary">{course.title}</h3>
              <div className="space-y-2 pl-4 border-l border-white/10">
                {course.modules.map(mod => (
                  <div key={mod.id} className="space-y-1">
                    <h4 className="text-sm font-bold text-white/80">{mod.title}</h4>
                    <div className="space-y-1 pl-4">
                      {mod.lessons.map(lesson => (
                        <div key={lesson.id} className="flex items-center justify-between p-2 rounded bg-white/5 hover:bg-white/10">
                          <span className="text-sm">{lesson.title}</span>
                          <Button variant="ghost" size="sm" className={lesson.quiz ? "text-primary" : "text-white/40"} onClick={() => setSelectedLesson({courseId: course.id, moduleId: mod.id, lesson})}>
                            {lesson.quiz ? "Editar Quiz" : "Adicionar Quiz"}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function AdminSupport() {
  const { forumQuestions, answerForumQuestion, courses } = useSchool();
  const [replyText, setReplyText] = React.useState("");
  const [replyingTo, setReplyingTo] = React.useState<string | null>(null);

  return (
    <Card className="bg-zinc-900 border-white/10">
      <CardHeader>
        <CardTitle>Central de Suporte</CardTitle>
        <CardDescription>Responda às dúvidas dos alunos.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {forumQuestions.length === 0 ? (
          <p className="text-center text-white/40 py-8">Nenhuma dúvida registrada.</p>
        ) : (
          forumQuestions.map(q => {
            const course = courses.find(c => c.id === q.courseId);
            const lesson = course?.modules.flatMap(m => m.lessons).find(l => l.id === q.lessonId);
            return (
              <div key={q.id} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm">{q.user}</span>
                      <span className="text-xs text-white/40">{new Date(q.createdAt).toLocaleDateString()}</span>
                    </div>
                    <p className="text-xs text-primary mb-2">{course?.title} - {lesson?.title}</p>
                    <p className="text-sm">{q.text}</p>
                  </div>
                  {q.answer && <Badge className="bg-green-500/20 text-green-500 border-none">Respondido</Badge>}
                </div>
                
                {q.answer ? (
                  <div className="p-3 bg-black/50 rounded-lg border border-white/5">
                    <p className="text-xs font-bold text-white/60 mb-1">Sua Resposta {q.isOfficial && "(Oficial)"}:</p>
                    <p className="text-sm text-white/80">{q.answer}</p>
                  </div>
                ) : replyingTo === q.id ? (
                  <div className="space-y-2 mt-4 pt-4 border-t border-white/10">
                    <textarea 
                      placeholder="Sua resposta oficial..." 
                      className="w-full bg-black border border-white/10 rounded-md p-3 text-sm min-h-[100px]"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                    />
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" onClick={() => { setReplyingTo(null); setReplyText(""); }}>Cancelar</Button>
                      <Button size="sm" className="bg-primary text-black" onClick={() => {
                        if (replyText.trim()) {
                          answerForumQuestion(q.id, replyText, true);
                          setReplyingTo(null);
                          setReplyText("");
                        }
                      }}>Enviar Resposta</Button>
                    </div>
                  </div>
                ) : (
                  <Button variant="outline" size="sm" className="border-white/10" onClick={() => setReplyingTo(q.id)}>
                    Responder
                  </Button>
                )}
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}
