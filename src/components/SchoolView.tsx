import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { 
  Play, BookOpen, Award, Clock, Star, ChevronRight, ChevronLeft, 
  Search, Filter, Download, MessageSquare, CheckCircle2, Lock, 
  Unlock, FileText, Video, Headphones, CheckSquare, Settings,
  BarChart as BarChartIcon, Users, DollarSign, LayoutDashboard, Plus, MoreVertical,
  Share2, ArrowRight, Flame, Trophy, Target, Zap, ArrowLeft,
  ThumbsUp, HelpCircle, FileDown, Edit3, Shield, GraduationCap,
  AlertCircle, BookMarked, AlertTriangle, WifiOff, XCircle, Loader2
} from "lucide-react"
import { LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

// Simple Progress component
function Progress({ value, className }: { value: number, className?: string }) {
  return (
    <div className={`w-full bg-black rounded-full overflow-hidden ${className}`}>
      <div className="h-full bg-primary transition-all duration-500" style={{ width: `${value}%` }} />
    </div>
  )
}

export function SchoolView({ userRole = 'member' }: { userRole?: string }) {
  const [activeTab, setActiveTab] = React.useState("dashboard")
  const [selectedCourse, setSelectedCourse] = React.useState<any>(null)
  const [selectedLesson, setSelectedLesson] = React.useState<any>(null)

  if (selectedLesson) {
    return <LessonPlayer lesson={selectedLesson} course={selectedCourse} onBack={() => setSelectedLesson(null)} />
  }

  if (selectedCourse) {
    return <CourseDetails course={selectedCourse} onBack={() => setSelectedCourse(null)} onStartLesson={(lesson) => setSelectedLesson(lesson)} />
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Escola Online</h1>
          <p className="text-white/60">A Jornada / Ensino</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold">Seu Progresso</p>
            <p className="text-xs text-white/40">Nível: Discípulo</p>
          </div>
          <div className="h-12 w-12 rounded-full border-4 border-primary border-t-white/10 flex items-center justify-center font-bold">
            40%
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <ScrollArea className="w-full whitespace-nowrap pb-4">
          <TabsList className="bg-zinc-900 border border-white/10 p-1 rounded-full inline-flex w-max">
            <TabsTrigger value="dashboard" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Início</TabsTrigger>
            <TabsTrigger value="catalog" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Catálogo</TabsTrigger>
            <TabsTrigger value="paths" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Trilhas</TabsTrigger>
            <TabsTrigger value="my-learning" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Meu Aprendizado</TabsTrigger>
            <TabsTrigger value="certificates" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Certificados</TabsTrigger>
            <TabsTrigger value="achievements" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Conquistas</TabsTrigger>
            {(userRole === 'admin' || userRole === 'teacher' || userRole === 'pastor') && (
              <TabsTrigger value="admin" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-black">Gestão</TabsTrigger>
            )}
          </TabsList>
        </ScrollArea>
        
        <TabsContent value="dashboard">
          <SchoolDashboard onSelectCourse={setSelectedCourse} />
        </TabsContent>
        
        <TabsContent value="catalog">
          <SchoolCatalog onSelectCourse={setSelectedCourse} />
        </TabsContent>

        <TabsContent value="paths">
          <SchoolPaths />
        </TabsContent>

        <TabsContent value="my-learning">
          <SchoolMyLearning onSelectCourse={setSelectedCourse} />
        </TabsContent>

        <TabsContent value="certificates">
          <SchoolCertificates />
        </TabsContent>

        <TabsContent value="achievements">
          <SchoolAchievements />
        </TabsContent>

        <TabsContent value="admin">
          <SchoolAdmin />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function SchoolDashboard({ onSelectCourse }: { onSelectCourse: (course: any) => void }) {
  const currentCourse = {
    id: 1,
    title: "Liderança de Célula",
    lesson: "Aula 3 — Fundamentos da Adoração",
    progress: 45,
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
  };

  return (
    <div className="space-y-8">
      {/* Header de Boas-Vindas */}
      <div className="flex items-center gap-4 bg-zinc-900 border border-white/10 p-6 rounded-[2rem]">
        <Avatar className="h-16 w-16 border-2 border-primary">
          <AvatarImage src="https://i.pravatar.cc/150?img=11" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Olá, João!</h2>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline" className="border-white/10">Ministério de Louvor</Badge>
            <Badge className="bg-orange-500/20 text-orange-500 border-none"><Flame className="w-3 h-3 mr-1" /> 7 dias seguidos</Badge>
          </div>
        </div>
      </div>

      {/* Card Continuar Estudando */}
      <Card className="bg-zinc-900 border-white/10 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 aspect-video relative group cursor-pointer" onClick={() => onSelectCourse(currentCourse)}>
            <img src={currentCourse.img} alt="Curso" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Button size="icon" className="h-12 w-12 rounded-full bg-primary text-black group-hover:scale-110 transition-transform">
                <Play className="h-5 w-5 ml-1" />
              </Button>
            </div>
          </div>
          <div className="p-6 md:w-2/3 flex flex-col justify-center space-y-4">
            <div>
              <p className="text-sm text-white/60 font-medium">Continuar Estudando</p>
              <h3 className="text-2xl font-bold mt-1">{currentCourse.title}</h3>
              <p className="text-white/80 mt-1">{currentCourse.lesson}</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Progresso do Módulo</span>
                <span className="font-bold">{currentCourse.progress}%</span>
              </div>
              <Progress value={currentCourse.progress} className="h-2" />
              <p className="text-xs text-white/40">~45 min restantes neste módulo</p>
            </div>
            <div className="flex gap-4 pt-2">
              <Button className="bg-primary text-black font-bold" onClick={() => onSelectCourse(currentCourse)}>Continuar Aula</Button>
              <Button variant="outline" className="border-white/10">Ver todos os meus cursos</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Resumo de Atividade */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Horas Assistidas", value: "24h", icon: Clock, color: "text-blue-400" },
          { label: "Cursos Concluídos", value: "3", icon: CheckCircle2, color: "text-green-400" },
          { label: "Média de Notas", value: "9.5", icon: Star, color: "text-yellow-400" },
          { label: "Badges", value: "8", icon: Award, color: "text-purple-400" },
        ].map((stat, i) => (
          <Card key={i} className="bg-zinc-900 border-white/10">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-xs text-white/60 uppercase tracking-wider font-bold">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Trilhas Recomendadas */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Recomendado para você em Louvor</h3>
          <Button variant="link" className="text-primary">Ver tudo</Button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-zinc-900 border-white/10 min-w-[300px] shrink-0 cursor-pointer hover:border-primary/50 transition-colors">
              <div className="aspect-video relative overflow-hidden rounded-t-xl">
                <img src={`https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop&sig=${i}`} alt="Trilha" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <Badge className="absolute bottom-3 left-3 bg-primary text-black border-none">Trilha</Badge>
              </div>
              <CardContent className="p-4">
                <h4 className="font-bold text-lg">Formação de Músicos</h4>
                <p className="text-sm text-white/60 mt-1">4 cursos • 0% concluído</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Próximas Aulas, Mural & Ranking */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="bg-zinc-900 border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg"><Lock className="w-5 h-5 text-primary" /> Próximas Aulas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
              <div>
                <p className="font-bold text-sm">Aula 4 — Prática</p>
                <p className="text-xs text-white/60">Liderança de Célula</p>
              </div>
              <Badge variant="outline" className="border-primary/50 text-primary">Em 3 dias</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
              <div>
                <p className="font-bold text-sm">Aula 5 — Setlist</p>
                <p className="text-xs text-white/60">Liderança de Célula</p>
              </div>
              <Badge variant="outline" className="border-white/20 text-white/60">Em 10 dias</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="flex items-center gap-2 text-lg"><Trophy className="w-5 h-5 text-yellow-500" /> Conquistas</CardTitle>
            <Button variant="link" className="text-xs text-primary p-0">Ver todas</Button>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 mt-2">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50" title="Primeiro Passo">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/50" title="Dedicado">
                <Flame className="w-6 h-6 text-orange-500" />
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/50" title="Estudioso">
                <BookOpen className="w-6 h-6 text-blue-500" />
              </div>
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 opacity-50" title="Mestre (Bloqueado)">
                <Lock className="w-5 h-5 text-white/40" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg"><Users className="w-5 h-5 text-secondary" /> Ranking da Célula</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-secondary/10 border border-secondary/20 rounded-xl text-center">
              <p className="text-sm font-bold text-secondary">Você está em 2º na sua célula!</p>
            </div>
            <div className="space-y-3">
              {[
                { name: "Maria Costa", pts: "1.450 XP", pos: 1 },
                { name: "João (Você)", pts: "1.250 XP", pos: 2 },
                { name: "Pedro Oliveira", pts: "980 XP", pos: 3 },
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`font-black text-sm ${user.pos === 1 ? 'text-yellow-500' : user.pos === 2 ? 'text-secondary' : 'text-white/40'}`}>{user.pos}º</span>
                    <Avatar className="w-8 h-8"><AvatarFallback>{user.name[0]}</AvatarFallback></Avatar>
                    <span className={`text-sm ${user.pos === 2 ? 'font-bold' : ''}`}>{user.name}</span>
                  </div>
                  <span className="text-xs font-mono text-white/60">{user.pts}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function SchoolCatalog({ onSelectCourse }: { onSelectCourse: (course: any) => void }) {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  const courses = [
    { id: 1, title: "Fundamentos da Fé", duration: "12h", students: 450, level: "Iniciante", format: "Vídeo", min: "Geral", img: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=600&auto=format&fit=crop" },
    { id: 2, title: "Liderança de Célula", duration: "20h", students: 120, level: "Intermediário", format: "Vídeo", min: "Células", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop" },
    { id: 3, title: "Teologia Prática", duration: "45h", students: 85, level: "Avançado", format: "Áudio", min: "Geral", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop" },
    { id: 4, title: "Ministério Infantil", duration: "15h", students: 64, level: "Específico", format: "Vídeo", min: "Kids", img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop" },
  ];

  const filteredCourses = courses.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
          <Input 
            placeholder="Buscar cursos..." 
            className="pl-12 bg-zinc-900 border-white/10 rounded-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Buscar cursos"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-white/10 rounded-full" aria-label="Filtros"><Filter className="w-4 h-4 md:mr-2" /> <span className="hidden md:inline">Filtros</span></Button>
          <select className="bg-zinc-900 border border-white/10 rounded-full px-4 text-sm outline-none focus:ring-1 focus:ring-primary" aria-label="Ordenar por">
            <option>Mais recentes</option>
            <option>Mais populares</option>
            <option>Maior avaliação</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="animate-pulse bg-zinc-900 rounded-xl h-64 border border-white/10" />
          ))}
        </div>
      ) : filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="bg-zinc-900 border-white/10 overflow-hidden group hover:border-primary/50 transition-all cursor-pointer focus-within:ring-2 focus-within:ring-primary" onClick={() => onSelectCourse(course)} tabIndex={0} role="button" aria-label={`Ver curso ${course.title}`}>
              <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                <img src={course.img} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" aria-hidden="true" />
                <div className="absolute top-2 left-2 flex gap-1">
                  <Badge className="bg-black/60 backdrop-blur-md border-white/10">{course.format === 'Vídeo' ? <Video className="w-3 h-3 mr-1" aria-hidden="true"/> : <Headphones className="w-3 h-3 mr-1" aria-hidden="true"/>} {course.format}</Badge>
                  <Badge className="bg-black/60 backdrop-blur-md border-white/10">{course.level}</Badge>
                </div>
              </div>
              <CardContent className="p-4 space-y-3">
                <Badge variant="outline" className="border-white/10 text-[10px] uppercase">{course.min}</Badge>
                <h3 className="font-bold text-lg leading-tight line-clamp-2">{course.title}</h3>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <Avatar className="w-5 h-5"><AvatarFallback>PR</AvatarFallback></Avatar>
                  <span>Pr. João Silva</span>
                </div>
                <div className="flex items-center justify-between text-xs text-white/40 pt-2 border-t border-white/5">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" aria-hidden="true" /> {course.duration}</span>
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" aria-hidden="true" /> 4.8</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 space-y-4 border border-dashed border-white/10 rounded-2xl">
          <Search className="w-12 h-12 text-white/20 mx-auto" />
          <div>
            <h3 className="font-bold text-lg">Nenhum curso encontrado</h3>
            <p className="text-white/60 text-sm">Tente ajustar seus filtros ou termo de busca.</p>
          </div>
          <Button variant="outline" className="border-white/10" onClick={() => setSearchQuery("")}>Limpar filtros</Button>
        </div>
      )}
    </div>
  )
}

function SchoolPaths() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: "Trilha do Novo Convertido", desc: "Fundamentos da Fé, Batismo, Célula", stage: "Ganhar", courses: 3 },
          { title: "Trilha de Consolidação", desc: "Vida de Oração, Bíblia para Iniciantes", stage: "Consolidar", courses: 2 },
          { title: "Trilha de Liderança", desc: "Liderança Servil, Discipulado", stage: "Treinar", courses: 4 },
          { title: "Trilha de Missão", desc: "Evangelismo, Plantação de Igrejas", stage: "Enviar", courses: 3 },
        ].map((path, i) => (
          <Card key={i} className="bg-zinc-900 border-white/10 hover:border-primary/50 transition-colors cursor-pointer">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 aspect-video sm:aspect-square bg-zinc-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Target className="w-12 h-12 text-primary opacity-50" />
                </div>
              </div>
              <div className="p-6 sm:w-2/3 flex flex-col justify-center space-y-2">
                <Badge className="w-max bg-primary/20 text-primary border-none">{path.stage}</Badge>
                <h3 className="text-xl font-bold">{path.title}</h3>
                <p className="text-sm text-white/60">{path.desc}</p>
                <p className="text-xs font-bold text-white/40 pt-2">{path.courses} cursos nesta trilha</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

function SchoolMyLearning({ onSelectCourse }: { onSelectCourse: (course: any) => void }) {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="in-progress" className="w-full">
        <TabsList className="bg-transparent border-b border-white/10 rounded-none w-full justify-start h-auto p-0 space-x-6">
          <TabsTrigger value="all" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3">Todos</TabsTrigger>
          <TabsTrigger value="in-progress" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3">Em andamento</TabsTrigger>
          <TabsTrigger value="completed" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3">Concluídos</TabsTrigger>
          <TabsTrigger value="wishlist" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3">Lista de Desejos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="wishlist" className="pt-6">
          <div className="text-center py-12 space-y-4 border border-dashed border-white/10 rounded-2xl">
            <BookMarked className="w-12 h-12 text-white/20 mx-auto" />
            <div>
              <h3 className="font-bold text-lg">Sua lista está vazia</h3>
              <p className="text-white/60 text-sm">Explore o catálogo e adicione cursos que deseja fazer no futuro.</p>
            </div>
            <Button variant="outline" className="border-white/10">Explorar Catálogo</Button>
          </div>
        </TabsContent>

        <TabsContent value="in-progress" className="pt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-zinc-900 border-white/10 overflow-hidden">
              <div className="flex">
                <div className="w-1/3 aspect-square relative">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop" alt="Curso" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold line-clamp-1">Liderança de Célula</h3>
                    <p className="text-xs text-white/60 mt-1">Última aula: Aula 3 — há 2 dias</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/60">45% concluído</span>
                      <span className="text-white/40">~3h restantes</span>
                    </div>
                    <Progress value={45} className="h-1.5" />
                  </div>
                  <Button size="sm" className="w-full bg-primary text-black mt-2" onClick={() => onSelectCourse({ title: "Liderança de Célula" })}>Continuar</Button>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function SchoolCertificates() {
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2].map((i) => (
          <Card key={i} className="bg-zinc-900 border-white/10 text-center p-6 space-y-4 hover:border-primary/50 transition-colors">
            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Award className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h3 className="font-bold">Fundamentos da Fé</h3>
              <p className="text-xs text-white/60 mt-1">Concluído em 10 Mar 2026</p>
            </div>
            <div className="flex gap-2 justify-center">
              <Button size="sm" variant="outline" className="border-white/10"><FileDown className="w-4 h-4 mr-2" /> PDF</Button>
              <Button size="sm" variant="outline" className="border-white/10"><Share2 className="w-4 h-4" /></Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

function SchoolAchievements() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-6 bg-zinc-900 border border-white/10 p-6 rounded-[2rem]">
        <div className="w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center bg-black">
          <span className="text-2xl font-black text-primary">LVL 3</span>
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-2xl font-bold">Discípulo</h2>
              <p className="text-sm text-white/60">1.250 XP total</p>
            </div>
            <span className="text-xs font-bold text-primary">Faltam 250 XP para Líder</span>
          </div>
          <Progress value={80} className="h-3" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold">Badges Conquistadas</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          <div className="bg-zinc-900 border border-white/10 p-4 rounded-2xl flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs font-bold">Primeiro Passo</span>
          </div>
          <div className="bg-zinc-900 border border-white/10 p-4 rounded-2xl flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
              <Flame className="w-6 h-6 text-orange-500" />
            </div>
            <span className="text-xs font-bold">Dedicado</span>
          </div>
          <div className="bg-zinc-900 border border-white/10 p-4 rounded-2xl flex flex-col items-center text-center gap-2 opacity-50 grayscale">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-bold">Maratonista</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold">Histórico de XP</h3>
        <Card className="bg-zinc-900 border-white/10">
          <CardContent className="p-0">
            <div className="divide-y divide-white/10">
              {[
                { action: "Aula Concluída: Fundamentos da Adoração", xp: "+50 XP", date: "Hoje, 14:30", icon: Play },
                { action: "Quiz Aprovado: Módulo 1 (100%)", xp: "+100 XP", date: "Ontem, 20:15", icon: CheckSquare },
                { action: "Badge Desbloqueada: Dedicado", xp: "+200 XP", date: "Ontem, 20:15", icon: Flame },
                { action: "Dúvida Respondida no Fórum", xp: "+20 XP", date: "10 Abr 2026", icon: MessageSquare },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white/60" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{item.action}</p>
                      <p className="text-xs text-white/40">{item.date}</p>
                    </div>
                  </div>
                  <span className="font-bold text-primary">{item.xp}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function SchoolAdmin() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="overview" className="w-full">
        <ScrollArea className="w-full whitespace-nowrap pb-4">
          <TabsList className="bg-transparent border-b border-white/10 rounded-none w-full justify-start h-auto p-0 space-x-6">
            <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3">Visão Geral</TabsTrigger>
            <TabsTrigger value="engagement" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3">Engajamento (Eclesiástico)</TabsTrigger>
            <TabsTrigger value="financial" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3">Financeiro</TabsTrigger>
            <TabsTrigger value="courses" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3">Gestão de Cursos</TabsTrigger>
            <TabsTrigger value="members" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3">Membros</TabsTrigger>
            <TabsTrigger value="support" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3">Suporte (Dúvidas)</TabsTrigger>
          </TabsList>
        </ScrollArea>

        <TabsContent value="overview" className="pt-6 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-zinc-900 border-white/10"><CardContent className="p-6"><p className="text-xs text-white/40 uppercase font-bold">Alunos Ativos</p><p className="text-3xl font-bold text-primary mt-2">1.240</p></CardContent></Card>
            <Card className="bg-zinc-900 border-white/10"><CardContent className="p-6"><p className="text-xs text-white/40 uppercase font-bold">Cursos Publicados</p><p className="text-3xl font-bold text-white mt-2">24</p></CardContent></Card>
            <Card className="bg-zinc-900 border-white/10"><CardContent className="p-6"><p className="text-xs text-white/40 uppercase font-bold">Taxa de Conclusão</p><p className="text-3xl font-bold text-secondary mt-2">68%</p></CardContent></Card>
            <Card className="bg-zinc-900 border-white/10"><CardContent className="p-6"><p className="text-xs text-white/40 uppercase font-bold">NPS da Plataforma</p><p className="text-3xl font-bold text-yellow-500 mt-2">9.2</p></CardContent></Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-zinc-900 border-white/10">
              <CardHeader><CardTitle>Alertas Prioritários</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="font-bold text-sm">Dúvidas sem resposta</p>
                      <p className="text-xs text-white/60">Mais de 48h aguardando professor</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500/20">Responder</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-500/10 border border-orange-500/20 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="font-bold text-sm">Alunos "esfriando"</p>
                      <p className="text-xs text-white/60">45 membros sem acesso há 15+ dias</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="border-orange-500/50 text-orange-400 hover:bg-orange-500/20">Notificar</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    <div>
                      <p className="font-bold text-sm">Cursos com problemas</p>
                      <p className="text-xs text-white/60">Vídeo quebrado detectado em 1 curso</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/20">Editar</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-white/10">
              <CardHeader><CardTitle>Ações Rápidas</CardTitle></CardHeader>
              <CardContent className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 border-white/10 hover:bg-white/5 hover:border-primary/50">
                  <Plus className="w-6 h-6 text-primary" />
                  <span>Criar Curso</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 border-white/10 hover:bg-white/5 hover:border-primary/50">
                  <FileText className="w-6 h-6 text-secondary" />
                  <span>Novo Quiz</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 border-white/10 hover:bg-white/5 hover:border-primary/50">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <span>Certificados</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 border-white/10 hover:bg-white/5 hover:border-primary/50">
                  <Download className="w-6 h-6 text-blue-500" />
                  <span>Relatórios</span>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-zinc-900 border-white/10">
              <CardHeader><CardTitle>Matrículas (Últimos 30 dias)</CardTitle></CardHeader>
              <CardContent className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[{name: '01', val: 12}, {name: '05', val: 19}, {name: '10', val: 15}, {name: '15', val: 25}, {name: '20', val: 22}, {name: '25', val: 30}, {name: '30', val: 28}]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                    <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                    <RechartsTooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#333', borderRadius: '8px' }} />
                    <Line type="monotone" dataKey="val" stroke="#C0FF00" strokeWidth={3} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-white/10">
              <CardHeader><CardTitle>Engajamento por Ministério</CardTitle></CardHeader>
              <CardContent className="h-[250px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Louvor', value: 400 },
                        { name: 'Células', value: 300 },
                        { name: 'Jovens', value: 300 },
                        { name: 'Kids', value: 200 },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      <Cell fill="#C0FF00" />
                      <Cell fill="#F5C207" />
                      <Cell fill="#3b82f6" />
                      <Cell fill="#8b5cf6" />
                    </Pie>
                    <RechartsTooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#333', borderRadius: '8px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="engagement" className="pt-6 space-y-6">
          <Card className="bg-zinc-900 border-white/10">
            <CardHeader>
              <CardTitle>Funil de Engajamento</CardTitle>
              <CardDescription>Distribuição dos membros da igreja na plataforma de ensino</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { level: "Sem acesso", desc: "Nunca acessou a plataforma", count: 350, pct: 100, color: "bg-zinc-700" },
                  { level: "Explorador", desc: "Acessou mas não matriculou", count: 210, pct: 60, color: "bg-zinc-500" },
                  { level: "Iniciante", desc: "Completou 1 curso", count: 145, pct: 41, color: "bg-blue-500" },
                  { level: "Ativo", desc: "De 2 a 9 cursos concluídos", count: 85, pct: 24, color: "bg-primary" },
                  { level: "Avançado", desc: "10+ cursos (Potenciais Líderes)", count: 32, pct: 9, color: "bg-secondary" },
                ].map((tier, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-32 shrink-0">
                      <p className="font-bold text-sm">{tier.level}</p>
                      <p className="text-[10px] text-white/40">{tier.desc}</p>
                    </div>
                    <div className="flex-1 h-8 bg-black rounded-r-full overflow-hidden flex items-center">
                      <div className={`h-full ${tier.color} flex items-center px-3`} style={{ width: `${tier.pct}%` }}>
                        <span className="text-xs font-bold text-black">{tier.count}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="shrink-0 text-white/40 hover:text-white">Ver lista</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="financial" className="pt-6 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-zinc-900 border-white/10"><CardContent className="p-6"><p className="text-xs text-white/40 uppercase font-bold">MRR (Receita Mensal)</p><p className="text-2xl font-bold text-primary mt-2">R$ 15.400</p></CardContent></Card>
            <Card className="bg-zinc-900 border-white/10"><CardContent className="p-6"><p className="text-xs text-white/40 uppercase font-bold">ARR (Receita Anual)</p><p className="text-2xl font-bold text-white mt-2">R$ 184.800</p></CardContent></Card>
            <Card className="bg-zinc-900 border-white/10"><CardContent className="p-6"><p className="text-xs text-white/40 uppercase font-bold">LTV Médio</p><p className="text-2xl font-bold text-white mt-2">R$ 450,00</p></CardContent></Card>
            <Card className="bg-zinc-900 border-white/10"><CardContent className="p-6"><p className="text-xs text-white/40 uppercase font-bold">Churn Rate</p><p className="text-2xl font-bold text-red-500 mt-2">2.5%</p></CardContent></Card>
          </div>
          <Card className="bg-zinc-900 border-white/10">
            <CardHeader><CardTitle>Transações Recentes</CardTitle></CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-white/40 uppercase border-b border-white/10">
                    <tr><th className="pb-3 font-bold">Data</th><th className="pb-3 font-bold">Membro</th><th className="pb-3 font-bold">Produto</th><th className="pb-3 font-bold">Valor</th><th className="pb-3 font-bold">Status</th></tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { date: "Hoje, 10:23", user: "João Silva", prod: "Assinatura Mensal", val: "R$ 49,90", status: "Pago", color: "text-green-500" },
                      { date: "Hoje, 09:15", user: "Maria Costa", prod: "Curso: Liderança", val: "R$ 97,00", status: "Pago", color: "text-green-500" },
                      { date: "Ontem, 18:40", user: "Pedro Alves", prod: "Assinatura Anual", val: "R$ 499,00", status: "Pendente", color: "text-yellow-500" },
                    ].map((tx, i) => (
                      <tr key={i} className="hover:bg-white/5">
                        <td className="py-3 text-white/60">{tx.date}</td>
                        <td className="py-3 font-bold">{tx.user}</td>
                        <td className="py-3">{tx.prod}</td>
                        <td className="py-3 font-mono">{tx.val}</td>
                        <td className={`py-3 font-bold ${tx.color}`}>{tx.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="pt-6 space-y-6">
          <div className="flex justify-between items-center">
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <Input placeholder="Buscar cursos..." className="pl-9 bg-zinc-900 border-white/10" />
            </div>
            <Button className="bg-primary text-black"><Plus className="w-4 h-4 mr-2" /> Novo Curso</Button>
          </div>
          <Card className="bg-zinc-900 border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-white/40 uppercase border-b border-white/10 bg-black/20">
                  <tr><th className="p-4 font-bold">Curso</th><th className="p-4 font-bold">Ministério</th><th className="p-4 font-bold">Módulos/Aulas</th><th className="p-4 font-bold">Matrículas</th><th className="p-4 font-bold">Status</th><th className="p-4 font-bold"></th></tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { name: "Liderança de Célula", min: "Células", content: "3 mod • 12 aulas", students: 847, status: "Publicado" },
                    { name: "Fundamentos da Fé", min: "Geral", content: "2 mod • 8 aulas", students: 1240, status: "Publicado" },
                    { name: "Teologia Prática", min: "Ensino", content: "5 mod • 20 aulas", students: 0, status: "Rascunho" },
                  ].map((c, i) => (
                    <tr key={i} className="hover:bg-white/5">
                      <td className="p-4 font-bold">{c.name}</td>
                      <td className="p-4"><Badge variant="outline" className="border-white/10">{c.min}</Badge></td>
                      <td className="p-4 text-white/60">{c.content}</td>
                      <td className="p-4">{c.students}</td>
                      <td className="p-4">
                        <Badge className={c.status === 'Publicado' ? 'bg-green-500/20 text-green-400 border-none' : 'bg-white/10 text-white/60 border-none'}>{c.status}</Badge>
                      </td>
                      <td className="p-4 text-right">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-white/60 hover:text-white"><Edit3 className="w-4 h-4" /></Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="members" className="pt-6 space-y-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <Input placeholder="Buscar membros..." className="pl-9 bg-zinc-900 border-white/10" />
            </div>
            <Button variant="outline" className="border-white/10"><Filter className="w-4 h-4 mr-2" /> Filtros</Button>
          </div>
          <Card className="bg-zinc-900 border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-white/40 uppercase border-b border-white/10 bg-black/20">
                  <tr><th className="p-4 font-bold">Membro</th><th className="p-4 font-bold">Ministério</th><th className="p-4 font-bold">Cursos (Matr/Concl)</th><th className="p-4 font-bold">Último Acesso</th><th className="p-4 font-bold"></th></tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { name: "João Silva", min: "Louvor", courses: "4 / 2", access: "Hoje", status: "active" },
                    { name: "Maria Costa", min: "Jovens", courses: "2 / 0", access: "Há 2 dias", status: "active" },
                    { name: "Pedro Alves", min: "Células", courses: "1 / 1", access: "Há 20 dias", status: "inactive" },
                  ].map((m, i) => (
                    <tr key={i} className="hover:bg-white/5">
                      <td className="p-4 flex items-center gap-3">
                        <Avatar className="w-8 h-8"><AvatarFallback>{m.name[0]}</AvatarFallback></Avatar>
                        <span className="font-bold">{m.name}</span>
                      </td>
                      <td className="p-4 text-white/60">{m.min}</td>
                      <td className="p-4">{m.courses}</td>
                      <td className="p-4">
                        <span className={`flex items-center gap-2 ${m.status === 'inactive' ? 'text-red-400' : 'text-white/80'}`}>
                          <div className={`w-2 h-2 rounded-full ${m.status === 'inactive' ? 'bg-red-500' : 'bg-green-500'}`} />
                          {m.access}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">Ver Perfil</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="pt-6 space-y-6">
          <Card className="bg-zinc-900 border-white/10">
            <CardHeader><CardTitle>Fila de Dúvidas (Fórum)</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { student: "Maria Costa", course: "Liderança de Célula", lesson: "Aula 3 - Adoração", time: "Há 2 horas", text: "Como lidar quando ninguém na célula sabe tocar um instrumento?", urgent: false },
                  { student: "Pedro Alves", course: "Fundamentos da Fé", lesson: "Aula 1 - Salvação", time: "Há 2 dias", text: "Não entendi muito bem a diferença entre graça e misericórdia. Podem explicar melhor?", urgent: true },
                ].map((q, i) => (
                  <div key={i} className={`p-4 rounded-xl border ${q.urgent ? 'bg-red-500/5 border-red-500/20' : 'bg-white/5 border-white/10'} space-y-3`}>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8"><AvatarFallback>{q.student[0]}</AvatarFallback></Avatar>
                        <div>
                          <p className="font-bold text-sm">{q.student}</p>
                          <p className="text-xs text-white/60">{q.course} • {q.lesson}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className={q.urgent ? 'border-red-500/50 text-red-400' : 'border-white/20 text-white/60'}>{q.time}</Badge>
                    </div>
                    <p className="text-sm text-white/80 pl-11">{q.text}</p>
                    <div className="pl-11 pt-2">
                      <Button size="sm" className="bg-primary text-black font-bold">Responder Aluno</Button>
                    </div>
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

// --- DETALHES DO CURSO ---
function CourseDetails({ course, onBack, onStartLesson }: { course: any, onBack: () => void, onStartLesson: (lesson: any) => void }) {
  return (
    <div className="space-y-8 pb-20">
      <Button variant="ghost" onClick={onBack} className="mb-4 hover:bg-white/5"><ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao catálogo</Button>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3 space-y-8">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Badge className="bg-primary/20 text-primary border-none">Ministério de Louvor</Badge>
              <Badge variant="outline" className="border-white/10">Intermediário</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-serif italic">{course.title || "Liderança de Célula"}</h1>
            <p className="text-xl text-white/60">Aprenda os fundamentos para liderar uma célula saudável e multiplicadora, com foco no discipulado e na palavra.</p>
            
            <div className="flex flex-wrap gap-6 text-sm text-white/60 pt-4">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500" /> 4.8 (124 avaliações)</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 847 alunos</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 12 horas totais</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">O que você vai aprender</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Fundamentos bíblicos da célula", "Como preparar um estudo", "Lidando com conflitos", "Multiplicação saudável"].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Pré-requisitos</h3>
            <Card className="bg-zinc-900 border-white/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500"/>
                </div>
                <div>
                  <p className="font-bold">Fundamentos da Fé</p>
                  <p className="text-xs text-white/60">Status: Concluído</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="border-white/10">Revisar</Button>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Currículo do Curso</h3>
            <div className="space-y-2">
              {[
                { title: "Módulo 1: A Visão Celular", lessons: 3, duration: "2h 30m" },
                { title: "Módulo 2: O Papel do Líder", lessons: 4, duration: "3h 15m" },
                { title: "Módulo 3: Dinâmica do Encontro", lessons: 5, duration: "4h 00m" },
              ].map((mod, i) => (
                <Card key={i} className="bg-zinc-900 border-white/10">
                  <CardHeader className="p-4 flex flex-row items-center justify-between cursor-pointer hover:bg-white/5">
                    <div>
                      <CardTitle className="text-lg">{mod.title}</CardTitle>
                      <CardDescription className="text-xs mt-1">{mod.lessons} aulas • {mod.duration}</CardDescription>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/40" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Material de Apoio</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="bg-zinc-900 border-white/10 p-4 flex gap-4 items-center hover:bg-white/5 transition-colors cursor-pointer">
                <div className="w-12 h-16 bg-zinc-800 rounded flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-white/40" />
                </div>
                <div>
                  <p className="font-bold text-sm line-clamp-2">Liderança com Propósito</p>
                  <p className="text-xs text-white/60 mt-1">Rick Warren</p>
                  <Badge variant="outline" className="mt-2 text-[10px] border-white/10">Amazon</Badge>
                </div>
              </Card>
            </div>
          </div>

          <Separator className="bg-white/10" />

          {/* Sobre o Professor */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Sobre o Professor</h3>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Avatar className="w-24 h-24 border-2 border-white/10"><AvatarFallback>PR</AvatarFallback></Avatar>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-primary">Pr. João Silva</h4>
                <p className="text-sm text-white/80 leading-relaxed">Pastor de Louvor e Adoração na Igreja Coroado há 10 anos. Formado em Teologia e Música, tem paixão por treinar líderes que adoram em espírito e em verdade. Já formou mais de 500 líderes de célula.</p>
                <Button variant="link" className="text-primary p-0 h-auto">Ver outros cursos do professor</Button>
              </div>
            </div>
          </div>

          <Separator className="bg-white/10" />

          {/* Avaliações */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Avaliações dos Alunos</h3>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-5xl font-black text-yellow-500">4.8</p>
                <div className="flex text-yellow-500 mt-2">
                  <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current opacity-50" />
                </div>
                <p className="text-xs text-white/40 mt-1">124 avaliações</p>
              </div>
              <div className="flex-1 space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-2 text-xs">
                    <span className="w-2 text-white/60">{star}</span>
                    <Star className="w-3 h-3 text-white/40" />
                    <Progress value={star === 5 ? 80 : star === 4 ? 15 : star === 3 ? 5 : 0} className="h-1.5 flex-1 bg-white/5" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4 pt-4">
              {[
                { name: "Carlos Eduardo", date: "há 2 semanas", text: "Curso excelente! Mudou completamente a forma como conduzo o louvor na minha célula. Muito prático e bíblico." },
                { name: "Ana Beatriz", date: "há 1 mês", text: "O Pr. João ensina com muita clareza. Os materiais em PDF são muito úteis para revisar com a equipe." }
              ].map((review, i) => (
                <div key={i} className="bg-zinc-900 border border-white/10 p-4 rounded-xl space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8"><AvatarFallback>{review.name[0]}</AvatarFallback></Avatar>
                      <div>
                        <p className="font-bold text-sm">{review.name}</p>
                        <p className="text-xs text-white/40">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-500">
                      <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <p className="text-sm text-white/80">{review.text}</p>
                </div>
              ))}
              <Button variant="outline" className="w-full border-white/10">Carregar mais avaliações</Button>
            </div>
          </div>
        </div>

        {/* Sidebar Sticky */}
        <div className="lg:w-1/3">
          <div className="sticky top-24 space-y-6">
            <Card className="bg-zinc-900 border-white/10 overflow-hidden">
              <div className="aspect-video relative">
                <img src={course.img || "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"} alt="Preview" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button size="icon" className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-primary hover:text-black transition-all">
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6 space-y-6">
                <div className="text-3xl font-black text-primary">Gratuito</div>
                <div className="space-y-3">
                  <Button className="w-full h-12 bg-primary text-black font-bold text-lg" onClick={() => onStartLesson({ title: "Aula 1: Introdução" })}>Começar Agora</Button>
                  <Button variant="outline" className="w-full h-12 border-white/10">Adicionar à Lista</Button>
                </div>
                <div className="space-y-3 text-sm text-white/60 pt-4 border-t border-white/10">
                  <p className="font-bold text-white">Este curso inclui:</p>
                  <div className="flex items-center gap-2"><Video className="w-4 h-4" /> 12 horas de vídeo sob demanda</div>
                  <div className="flex items-center gap-2"><FileDown className="w-4 h-4" /> 5 recursos para download</div>
                  <div className="flex items-center gap-2"><Award className="w-4 h-4" /> Certificado de conclusão</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- SALA DE AULA (PLAYER) ---
function LessonPlayer({ lesson, course, onBack }: { lesson: any, course: any, onBack: () => void }) {
  const [videoError, setVideoError] = React.useState(false)

  return (
    <div className="space-y-6 pb-20">
      <Button variant="ghost" onClick={onBack} className="mb-2 hover:bg-white/5" aria-label="Voltar ao curso"><ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> Voltar ao curso</Button>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Player Column (70%) */}
        <div className="lg:w-[70%] space-y-4">
          {/* Video Player Placeholder */}
          <div className="aspect-video bg-black rounded-2xl border border-white/10 relative overflow-hidden flex items-center justify-center group" role="region" aria-label="Video Player">
            {videoError ? (
              <div className="text-center space-y-2 p-4">
                <AlertTriangle className="w-10 h-10 text-red-500 mx-auto" />
                <p className="font-bold">Vídeo indisponível</p>
                <p className="text-sm text-white/60">Ocorreu um erro ao carregar o vídeo. O administrador já foi notificado.</p>
                <Button variant="outline" size="sm" className="mt-2" onClick={() => setVideoError(false)}>Tentar novamente</Button>
              </div>
            ) : (
              <>
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <Button size="icon" className="h-20 w-20 rounded-full bg-primary text-black z-10 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(192,255,0,0.3)]" aria-label="Play video">
                  <Play className="h-10 w-10 ml-2" aria-hidden="true" />
                </Button>

                {/* Custom Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/90 to-transparent focus-within:opacity-100">
                  <div className="flex items-center gap-4">
                    <Button size="icon" variant="ghost" className="text-white hover:text-primary" aria-label="Play/Pause (Space)"><Play className="w-5 h-5" aria-hidden="true" /></Button>
                    <span className="text-xs font-mono" aria-label="Tempo do vídeo: 12 minutos e 34 segundos de 45 minutos">12:34 / 45:00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost" className="text-white hover:text-primary" title="Modo Áudio" aria-label="Alternar para modo áudio"><Headphones className="w-5 h-5" aria-hidden="true" /></Button>
                    <Button size="icon" variant="ghost" className="text-white hover:text-primary" title="Legendas" aria-label="Ativar legendas"><MessageSquare className="w-5 h-5" aria-hidden="true" /></Button>
                    <Button size="icon" variant="ghost" className="text-white hover:text-primary" title="Configurações" aria-label="Configurações do player"><Settings className="w-5 h-5" aria-hidden="true" /></Button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Navigation & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-zinc-900 p-4 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="border-white/10 rounded-full"><ChevronLeft className="w-5 h-5" /></Button>
              <div className="text-center sm:text-left">
                <p className="text-xs text-white/40 uppercase tracking-wider font-bold">Módulo 1 • Aula 3</p>
                <h2 className="font-bold">{lesson.title || "Fundamentos da Adoração"}</h2>
              </div>
              <Button variant="outline" size="icon" className="border-white/10 rounded-full"><ChevronRight className="w-5 h-5" /></Button>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-black font-bold rounded-full">
              <CheckCircle2 className="w-4 h-4 mr-2" /> Marcar como concluída
            </Button>
          </div>

          {/* Content Tabs */}
          <Tabs defaultValue="about" className="w-full mt-8">
            <TabsList className="bg-transparent border-b border-white/10 rounded-none w-full justify-start h-auto p-0 space-x-6">
              <TabsTrigger value="about" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3">Sobre a Aula</TabsTrigger>
              <TabsTrigger value="materials" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3">Materiais</TabsTrigger>
              <TabsTrigger value="notes" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3">Anotações</TabsTrigger>
              <TabsTrigger value="qa" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3">Dúvidas</TabsTrigger>
              <TabsTrigger value="quiz" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3">Quiz</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="pt-6 space-y-6">
              <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl flex gap-4 items-start">
                <SparklesIcon className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-1">Resumo gerado por IA</h4>
                  <p className="text-sm text-white/80 leading-relaxed">Nesta aula, abordamos os princípios fundamentais da adoração genuína, destacando que ela vai além da música e se manifesta em um estilo de vida de obediência e entrega. Exploramos passagens chave em João 4 e Romanos 12.</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold">Descrição</h4>
                <p className="text-sm text-white/60 leading-relaxed">A adoração é o coração da célula. Aprenda como conduzir momentos de louvor que conectam as pessoas a Deus, mesmo sem instrumentos musicais.</p>
              </div>
            </TabsContent>

            <TabsContent value="materials" className="pt-6 space-y-4">
              {[
                { name: "Guia de Estudo - Aula 3.pdf", size: "2.4 MB", type: "PDF" },
                { name: "Cifras - Louvores Sugeridos.pdf", size: "1.1 MB", type: "PDF" }
              ].map((file, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-zinc-900 border border-white/10 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white/60" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{file.name}</p>
                      <p className="text-xs text-white/40">{file.type} • {file.size}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-white/10"><Download className="w-4 h-4 mr-2" /> Baixar</Button>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="notes" className="pt-6 space-y-4">
              <div className="bg-zinc-900 border border-white/10 p-4 rounded-xl space-y-4">
                <textarea 
                  placeholder="Faça suas anotações aqui..." 
                  className="w-full bg-transparent border-none outline-none text-sm resize-none min-h-[100px] text-white placeholder:text-white/20"
                />
                <div className="flex justify-between items-center pt-2 border-t border-white/5">
                  <Badge variant="outline" className="border-primary/50 text-primary cursor-pointer hover:bg-primary/10"><Clock className="w-3 h-3 mr-1" /> Adicionar tempo atual (12:34)</Badge>
                  <Button size="sm" className="bg-primary text-black font-bold">Salvar Nota</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="qa" className="pt-6 space-y-6">
              <div className="flex gap-4">
                <Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
                <div className="flex-1 space-y-2">
                  <textarea 
                    placeholder="Tem alguma dúvida sobre esta aula?" 
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-sm outline-none focus:border-primary resize-none"
                    rows={2}
                  />
                  <div className="flex justify-end">
                    <Button size="sm" className="bg-primary text-black font-bold">Enviar Pergunta</Button>
                  </div>
                </div>
              </div>
              <Separator className="bg-white/10" />
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Avatar><AvatarFallback>MC</AvatarFallback></Avatar>
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-sm">Maria Costa</p>
                        <p className="text-xs text-white/40">há 2 dias • <span className="text-primary cursor-pointer hover:underline">Em 08:15</span></p>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 text-white/40 hover:text-white"><ThumbsUp className="w-4 h-4 mr-1" /> 12</Button>
                    </div>
                    <p className="text-sm text-white/80">Como lidar quando ninguém na célula sabe tocar um instrumento?</p>
                    
                    {/* Resposta Oficial */}
                    <div className="mt-4 bg-primary/5 border border-primary/20 p-4 rounded-xl flex gap-3">
                      <Avatar className="w-8 h-8 border border-primary"><AvatarFallback>PR</AvatarFallback></Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-sm text-primary">Pr. João Silva</p>
                          <Badge className="bg-primary text-black text-[8px] h-4 px-1">Professor</Badge>
                        </div>
                        <p className="text-sm text-white/80 mt-1">Ótima pergunta, Maria! Nesses casos, recomendamos usar playbacks ou focar em louvores a capela conhecidos por todos. O importante é a intenção do coração.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="quiz" className="pt-6 space-y-6">
              <div className="bg-zinc-900 border border-white/10 p-6 rounded-2xl space-y-6">
                <div className="space-y-2">
                  <Badge className="bg-purple-500/20 text-purple-400 border-none mb-2">Quiz de Fixação</Badge>
                  <h3 className="text-xl font-bold">Verifique seu aprendizado</h3>
                  <p className="text-sm text-white/60">Responda para liberar a próxima aula. Nota mínima: 70%.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-3">
                    <p className="font-bold text-sm">1. Qual é o principal objetivo do momento de louvor na célula?</p>
                    <div className="space-y-2">
                      {["Cantar as músicas mais tocadas na rádio", "Preparar o ambiente para a palavra conectando as pessoas a Deus", "Mostrar os talentos musicais dos membros", "Apenas preencher o tempo antes do estudo"].map((opt, i) => (
                        <label key={i} className="flex items-center gap-3 p-3 border border-white/10 rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
                          <input type="radio" name="q1" className="text-primary focus:ring-primary bg-zinc-800 border-white/20" />
                          <span className="text-sm text-white/80">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs text-white/40">Você tem 3 tentativas restantes</span>
                  <Button className="bg-primary text-black font-bold">Enviar Respostas</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar Column (30%) */}
        <div className="lg:w-[30%]">
          <div className="sticky top-24 space-y-6">
            <Card className="bg-zinc-900 border-white/10">
              <CardHeader className="pb-4 border-b border-white/5">
                <CardTitle className="text-lg">Progresso do Curso</CardTitle>
                <div className="flex items-center gap-3 mt-2">
                  <Progress value={37} className="h-2 flex-1" />
                  <span className="text-sm font-bold text-primary">37%</span>
                </div>
              </CardHeader>
              <ScrollArea className="h-[calc(100vh-300px)]">
                <div className="p-4 space-y-4">
                  {[
                    { title: "Módulo 1: A Visão Celular", lessons: [
                      { title: "Aula 1: O que é uma célula", duration: "15:00", status: "completed" },
                      { title: "Aula 2: Por que nos reunimos", duration: "18:30", status: "completed" },
                      { title: "Aula 3: Fundamentos da Adoração", duration: "45:00", status: "current" },
                    ]},
                    { title: "Módulo 2: O Papel do Líder", lessons: [
                      { title: "Aula 4: Prática de Banda", duration: "22:10", status: "locked" },
                      { title: "Aula 5: Setlist", duration: "19:45", status: "locked" },
                    ]}
                  ].map((mod, i) => (
                    <div key={i} className="space-y-2">
                      <h4 className="font-bold text-sm text-white/80">{mod.title}</h4>
                      <div className="space-y-1">
                        {mod.lessons.map((l, j) => (
                          <div key={j} className={`flex items-start gap-3 p-2 rounded-lg cursor-pointer transition-colors
                            ${l.status === 'current' ? 'bg-primary/10 border border-primary/20' : 'hover:bg-white/5'}
                            ${l.status === 'locked' ? 'opacity-50 cursor-not-allowed' : ''}
                          `}>
                            <div className="mt-0.5 shrink-0">
                              {l.status === 'completed' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                              {l.status === 'current' && <Play className="w-4 h-4 text-primary fill-primary" />}
                              {l.status === 'locked' && <Lock className="w-4 h-4 text-white/40" />}
                            </div>
                            <div className="flex-1">
                              <p className={`text-sm ${l.status === 'current' ? 'font-bold text-primary' : 'text-white/80'}`}>{l.title}</p>
                              <p className="text-xs text-white/40">{l.duration}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function SparklesIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  )
}
