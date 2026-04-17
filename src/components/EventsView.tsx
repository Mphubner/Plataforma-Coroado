import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Clock, Users, Ticket, QrCode, ScanEye, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ReactQrCode from 'react-qr-code';

type EventInfo = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  capacity: number;
  enrolled: number;
  image: string;
  description: string;
};

const MOCK_EVENTS: EventInfo[] = [
  {
    id: 'e1',
    title: 'Conferência Jovens Coroado',
    date: '2023-11-20',
    time: '19:30',
    location: 'Campus Principal',
    type: 'Conferência',
    capacity: 500,
    enrolled: 485,
    image: 'https://images.unsplash.com/photo-1540039155733-d730a53ffb4c?q=80&w=800&auto=format&fit=crop',
    description: 'Dois dias de imersão, louvor e palavra para a juventude.'
  },
  {
    id: 'e2',
    title: 'Acampamento de Célula (Rede Azul)',
    date: '2023-12-05',
    time: '08:00',
    location: 'Sítio Recanto',
    type: 'Retiro',
    capacity: 100,
    enrolled: 40,
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800&auto=format&fit=crop',
    description: 'Momento de comunhão e fortalecimento dos laços da rede azul.'
  },
  {
    id: 'e3',
    title: 'Culto de Ensino Especial',
    date: '2023-11-15',
    time: '20:00',
    location: 'Campus Principal',
    type: 'Culto',
    capacity: 300,
    enrolled: 150,
    image: 'https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?q=80&w=800&auto=format&fit=crop',
    description: 'Aprofundamento teológico e estudo de apocalipse com o Pastor Presidente.'
  }
];

export function EventsView() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'mytickets' | 'admin'>('upcoming');
  const [selectedEvent, setSelectedEvent] = useState<EventInfo | null>(null);
  const [activeTicket, setActiveTicket] = useState<string | null>(null);

  // Simulation: We assume the user has a ticket for 'e1'
  const myTickets = ['e1'];

  const handleEnroll = (event: EventInfo) => {
    if (myTickets.includes(event.id)) {
      alert("Você já tem ingresso para este evento.");
      return;
    }
    alert(`Inscrição para ${event.title} realizada com sucesso!`);
    setSelectedEvent(null);
  };

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Eventos & Agenda</h1>
          <p className="text-white/60">Inscreva-se em cultos, retiros e conferências da igreja, e faça seu check-in.</p>
        </div>
      </div>

      <div className="flex gap-2 bg-zinc-900 border border-white/10 p-1 rounded-lg w-fit overflow-x-auto max-w-full">
        <button 
          onClick={() => setActiveTab("upcoming")}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${activeTab === "upcoming" ? "bg-white/10 text-white" : "text-white/60 hover:text-white hover:bg-white/5"}`}
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Próximos Eventos
          </div>
        </button>
        <button 
          onClick={() => setActiveTab("mytickets")}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${activeTab === "mytickets" ? "bg-white/10 text-white" : "text-white/60 hover:text-white hover:bg-white/5"}`}
        >
          <div className="flex items-center gap-2">
            <Ticket className="w-4 h-4" /> Meus Ingressos
          </div>
        </button>
        <button 
          onClick={() => setActiveTab("admin")}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${activeTab === "admin" ? "bg-primary/20 text-primary" : "text-white/60 hover:text-white hover:bg-white/5"}`}
        >
          <div className="flex items-center gap-2">
            <ScanEye className="w-4 h-4" /> Check-in (Recepção)
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
          {activeTab === 'upcoming' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_EVENTS.map(event => {
                const occupancy = (event.enrolled / event.capacity) * 100;
                const isFull = event.enrolled >= event.capacity;
                return (
                  <Card key={event.id} className="bg-zinc-900 border-white/10 overflow-hidden flex flex-col group">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-black/40 z-10" />
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                      <Badge className="absolute top-4 left-4 z-20 bg-primary/20 text-primary border-none">{event.type}</Badge>
                      <Badge className="absolute top-4 right-4 z-20 bg-black/60 text-white border-white/20 backdrop-blur-md">
                        {new Date(event.date).toLocaleDateString('pt-BR')}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl line-clamp-1">{event.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2 font-medium">
                        <MapPin className="w-3 h-3 text-primary shrink-0" /> <span className="truncate">{event.location}</span>
                        <Clock className="w-3 h-3 text-primary shrink-0 ml-2" /> <span>{event.time}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-end space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold text-white/60">
                          <span>Vagas: {event.enrolled} preenchidas</span>
                          <span>Capacidade: {event.capacity}</span>
                        </div>
                        <div className="h-1.5 bg-black rounded-full overflow-hidden">
                          <div className={`h-full ${isFull ? 'bg-red-500' : occupancy > 80 ? 'bg-yellow-500' : 'bg-primary'}`} style={{ width: `${occupancy}%` }} />
                        </div>
                        {isFull && <p className="text-xs text-red-500 font-bold">Lotação Esgotada</p>}
                      </div>
                      <Button 
                        onClick={() => setSelectedEvent(event)}
                        disabled={isFull}
                        className={`w-full font-bold ${isFull ? 'bg-zinc-800 text-white/40' : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'}`}
                      >
                        {isFull ? 'Esgotado' : 'Garantir Vaga'}
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}

          {activeTab === 'mytickets' && (
            <div className="space-y-6">
              {MOCK_EVENTS.filter(e => myTickets.includes(e.id)).map(event => (
                <div key={event.id} className="flex flex-col md:flex-row bg-zinc-900 border border-white/10 rounded-[2rem] overflow-hidden align-center relative max-w-4xl mx-auto">
                   
                   <div className="md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-dashed border-white/20 flex flex-col items-center justify-center bg-black/40 relative">
                     {/* Cutout circles for ticket effect */}
                     <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-black md:block hidden"></div>
                     <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-black md:block hidden"></div>

                     <div className="bg-white p-4 rounded-xl">
                       <ReactQrCode value={`ticket-${event.id}-user-123`} size={150} />
                     </div>
                     <p className="mt-4 text-xs font-mono text-white/40 tracking-widest uppercase">ID: TCK-{event.id}-123</p>
                   </div>

                   <div className="md:w-2/3 p-8 md:p-12 space-y-6 flex flex-col justify-center relative">
                     <div>
                       <Badge className="bg-primary/20 text-primary border-none mb-4">{event.type}</Badge>
                       <h3 className="text-3xl font-black font-serif italic mb-2">{event.title}</h3>
                       <p className="text-white/60">{event.description}</p>
                     </div>
                     <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
                       <div>
                         <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">Data</p>
                         <p className="font-bold flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {new Date(event.date).toLocaleDateString('pt-BR')}</p>
                       </div>
                       <div>
                         <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">Hora</p>
                         <p className="font-bold flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {event.time}</p>
                       </div>
                       <div>
                         <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">Local</p>
                         <p className="font-bold flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {event.location}</p>
                       </div>
                     </div>
                   </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'admin' && (
            <div className="max-w-md mx-auto space-y-8">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto">
                  <ScanEye className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold">Modo Escâner</h3>
                <p className="text-white/60">Aponte a câmera para o QR Code do ingresso do membro para registrar sua entrada no evento.</p>
              </div>

              <div className="aspect-square bg-black border-2 border-dashed border-white/20 rounded-[2rem] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-scan" style={{ animationDuration: '3s', animationIterationCount: 'infinite' }} />
                <p className="text-white/40 font-bold tracking-widest text-sm z-10 bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">CÂMERA ATIVA</p>
              </div>
              
              <Button onClick={() => alert("Check-in de 'User' confirmado para o Evento!")} className="w-full h-14 bg-primary text-black font-bold">
                Simular Leitura Bem-sucedida
              </Button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.95 }}
               className="bg-zinc-900 border border-white/10 rounded-[2.5rem] max-w-lg w-full overflow-hidden"
            >
              <div className="h-48 relative">
                <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                <Button 
                   variant="ghost" 
                   size="icon" 
                   onClick={() => setSelectedEvent(null)}
                   className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-8 space-y-6">
                <div>
                  <Badge className="bg-primary/20 text-primary border-none mb-3">{selectedEvent.type}</Badge>
                  <h3 className="text-2xl font-black font-serif italic leading-tight mb-2">{selectedEvent.title}</h3>
                  <p className="text-white/60">{selectedEvent.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 bg-black/40 p-4 rounded-2xl border border-white/5">
                  <div className="space-y-1">
                     <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Data e Hora</p>
                     <p className="font-bold text-sm">{new Date(selectedEvent.date).toLocaleDateString('pt-BR')} às {selectedEvent.time}</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Local</p>
                     <p className="font-bold text-sm">{selectedEvent.location}</p>
                  </div>
                </div>

                <Button onClick={() => handleEnroll(selectedEvent)} className="w-full h-14 bg-primary text-black font-bold uppercase tracking-wider">
                  Confirmar Inscrição
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}
