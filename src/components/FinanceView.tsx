import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeartHandshake, DollarSign, Target, MapPin, Globe, CreditCard, Send, History, CheckCircle2, QrCode, Copy, ChevronRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const MOCK_PROJECT_BOQUIRA = {
  target: 15000,
  current: 8750,
  donors: 142,
  deadline: '2023-12-20',
  impactReports: [
    { date: '2023-11-01', text: 'Compra de 50 cestas básicas concluída.', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop' },
    { date: '2023-10-15', text: 'Equipe de saúde iniciou os atendimentos médicos.', image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=600&auto=format&fit=crop' }
  ]
};

const MOCK_HISTORY = [
  { id: 'h1', date: '2023-11-05', type: 'Dízimo', amount: 500, status: 'completed' },
  { id: 'h2', date: '2023-11-05', type: 'Oferta - Missões (Boquira)', amount: 150, status: 'completed' },
  { id: 'h3', date: '2023-10-05', type: 'Dízimo', amount: 500, status: 'completed' },
];

export function FinanceView() {
  const [activeTab, setActiveTab] = useState<'tithes' | 'missions' | 'history'>('tithes');
  const [donateAmount, setDonateAmount] = useState('100');
  const [donateType, setDonateType] = useState('dizimo');
  const [showPix, setShowPix] = useState(false);
  const [history, setHistory] = useState(MOCK_HISTORY);

  const handleSimulatePayment = () => {
    setShowPix(true);
  };

  const confirmPayment = () => {
    alert("Pagamento/Doação simulado com sucesso!");
    setShowPix(false);
    setHistory([{ id: `h${Date.now()}`, date: new Date().toISOString().split('T')[0], type: donateType === 'dizimo' ? 'Dízimo' : 'Oferta/Missões', amount: Number(donateAmount), status: 'completed' }, ...history]);
  };

  const projectProgress = (MOCK_PROJECT_BOQUIRA.current / MOCK_PROJECT_BOQUIRA.target) * 100;

  return (
    <div className="space-y-8 pb-20">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Financeiro & Missões</h1>
        <p className="text-white/60">Gestão de dízimos, ofertas e envolvimento nos campos missionários.</p>
      </div>

      <div className="flex gap-2 bg-zinc-900 border border-white/10 p-1 rounded-lg w-fit overflow-x-auto max-w-full">
        <button 
          onClick={() => setActiveTab("tithes")}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${activeTab === "tithes" ? "bg-white/10 text-white" : "text-white/60 hover:text-white hover:bg-white/5"}`}
        >
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4" /> Dízimos e Ofertas
          </div>
        </button>
        <button 
          onClick={() => setActiveTab("missions")}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${activeTab === "missions" ? "bg-white/10 text-white" : "text-white/60 hover:text-white hover:bg-white/5"}`}
        >
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" /> Projeto Boquira
          </div>
        </button>
        <button 
          onClick={() => setActiveTab("history")}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${activeTab === "history" ? "bg-white/10 text-white" : "text-white/60 hover:text-white hover:bg-white/5"}`}
        >
          <div className="flex items-center gap-2">
            <History className="w-4 h-4" /> Histórico
          </div>
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'tithes' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-zinc-900 border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl">Nova Contribuição</CardTitle>
                  <CardDescription>Devolva seu dízimo ou oferte com facilidade e segurança.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      onClick={() => setDonateType('dizimo')}
                      className={`h-16 ${donateType === 'dizimo' ? 'bg-primary/20 border-primary text-white' : 'bg-black border-white/10 text-white/60'}`}
                    >
                      Dízimo
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setDonateType('oferta')}
                      className={`h-16 ${donateType === 'oferta' ? 'bg-primary/20 border-primary text-white' : 'bg-black border-white/10 text-white/60'}`}
                    >
                      Oferta Voluntária
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/60">Valor (R$)</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <Input 
                        type="number" 
                        value={donateAmount}
                        onChange={(e) => setDonateAmount(e.target.value)}
                        className="pl-10 h-14 bg-black border-white/10 text-xl font-bold font-mono" 
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button onClick={handleSimulatePayment} className="w-full h-14 bg-primary text-black font-bold text-lg hover:bg-primary/90">
                      Gerar PIX
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Informative Side */}
              <div className="space-y-6 flex flex-col justify-center">
                <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-[2rem] border border-white/10 space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <HeartHandshake className="w-40 h-40" />
                  </div>
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-2xl font-serif italic font-black">Princípios da Graça</h3>
                    <p className="text-white/60 leading-relaxed">
                      "Cada um contribua segundo propôs no seu coração; não com tristeza, nem por constrangimento; porque Deus ama ao que dá com alegria." <br/><br/>
                      — 2 Coríntios 9:7
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <CreditCard className="w-6 h-6 text-white/40 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm">Transparência Financeira</h4>
                    <p className="text-xs text-white/60">Todos os recursos são direcionados ao avanço da igreja e das missões. O balanço está sempre disponível na Secretaria.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'missions' && (
            <div className="space-y-8">
              <div className="relative h-[300px] rounded-[2.5rem] overflow-hidden flex items-end p-8 border border-white/10">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                  <img src="https://images.unsplash.com/photo-1542810634-71277d95dc8c?q=80&w=1200&auto=format&fit=crop" alt="Boquira" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="relative z-20 w-full max-w-3xl space-y-4">
                  <Badge className="bg-primary/20 text-primary border-none px-3 py-1 uppercase tracking-widest text-[10px]">Missões Transculturais</Badge>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight font-serif italic text-white">
                    Visão Boquira
                  </h2>
                  <p className="text-lg text-white/80 max-w-xl">
                    Levando saúde, educação e o Evangelho para as comunidades ribeirinhas e sertoes da Bahia.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  {/* Progress Tracker */}
                  <Card className="bg-zinc-900 border-white/10">
                    <CardHeader>
                      <CardTitle>Meta da Campanha de Natal</CardTitle>
                      <CardDescription>Arrecadação para presentes e reforma do Centro Comunitário.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm font-bold">
                          <span className="text-primary">R$ {MOCK_PROJECT_BOQUIRA.current.toLocaleString('pt-BR')} arrecadados</span>
                          <span className="text-white/60">Meta: R$ {MOCK_PROJECT_BOQUIRA.target.toLocaleString('pt-BR')}</span>
                        </div>
                        <div className="h-4 bg-black rounded-full overflow-hidden border border-white/5">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${projectProgress}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-primary relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </motion.div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-white/40" />
                          <span className="text-sm">{MOCK_PROJECT_BOQUIRA.donors} Pessoas doaram</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-white/40" />
                          <span className="text-sm">Encerra em {new Date(MOCK_PROJECT_BOQUIRA.deadline).toLocaleDateString('pt-BR')}</span>
                        </div>
                      </div>
                      <Button onClick={() => { setActiveTab('tithes'); setDonateType('oferta'); }} className="w-full bg-primary text-black font-bold h-12">
                        Somar à Campanha
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Impact Stream */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Transparência em Ação</h3>
                    <div className="space-y-4">
                      {MOCK_PROJECT_BOQUIRA.impactReports.map((report, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row gap-4 bg-zinc-900 p-4 rounded-2xl border border-white/10">
                          <img src={report.image} alt="Impact" className="w-full md:w-48 h-32 object-cover rounded-xl grayscale hover:grayscale-0 transition-all" />
                          <div className="space-y-2">
                            <Badge variant="outline" className="text-[10px] text-white/40">{report.date}</Badge>
                            <p className="font-medium text-white/80">{report.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card className="bg-zinc-900 border-white/10">
                    <CardHeader>
                      <CardTitle className="text-lg">Como Envolver-se</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0"><DollarSign className="w-4 h-4"/></div>
                        <div>
                          <p className="font-bold text-sm">Contribuição Ouro</p>
                          <p className="text-xs text-white/60">Ajuda financeira mensal via Pix/Cartão.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0"><MapPin className="w-4 h-4"/></div>
                        <div>
                          <p className="font-bold text-sm">Viagem Missionária</p>
                          <p className="text-xs text-white/60">Inscreva-se para a próxima caravana de Janeiro.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0"><Heart className="w-4 h-4"/></div>
                        <div>
                          <p className="font-bold text-sm">Adoção de Criança</p>
                          <p className="text-xs text-white/60">Apadrinhe parte da educação infantil no sertão.</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-4 border-white/10 hover:bg-white/5">Falar com a Equipe</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <Card className="bg-zinc-900 border-white/10">
              <CardHeader>
                <CardTitle>Histórico de Contribuições</CardTitle>
                <CardDescription>Seus registros de dízimos e ofertas emitidos com a sua conta.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {history.map(item => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold">{item.type}</p>
                          <p className="text-xs text-white/40">{new Date(item.date).toLocaleDateString('pt-BR')}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold font-mono">R$ {item.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                        <p className="text-[10px] text-green-400 uppercase tracking-widest">Confirmado</p>
                      </div>
                    </div>
                  ))}
                  {history.length === 0 && (
                    <div className="text-center p-8 text-white/40 border border-dashed border-white/10 rounded-xl">
                      Nenhum histórico encontrado.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </AnimatePresence>

      {/* PIX Modal */}
      <AnimatePresence>
        {showPix && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-zinc-900 border border-white/10 rounded-3xl max-w-md w-full overflow-hidden p-8 text-center space-y-6"
            >
              <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-2">
                <QrCode className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Pagar via PIX</h3>
              <p className="text-white/60">
                Valor: <span className="font-bold text-white text-xl">R$ {Number(donateAmount).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </p>
              
              <div className="bg-white p-4 rounded-xl inline-block mx-auto">
                <QrCode className="w-48 h-48 text-black" />
              </div>

              <div className="space-y-3 pt-4">
                <Button variant="outline" className="w-full flex items-center gap-2 border-white/20 h-12">
                  <Copy className="w-4 h-4" /> Copiar Código Copia e Cola
                </Button>
                <Button onClick={confirmPayment} className="w-full bg-primary text-black font-bold h-12">
                  Já paguei / Simular Sucesso
                </Button>
                <Button variant="ghost" onClick={() => setShowPix(false)} className="w-full text-white/40 hover:text-white">
                  Cancelar
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Importing a few missing icons for this component
import { Users, Calendar, Heart } from 'lucide-react';
