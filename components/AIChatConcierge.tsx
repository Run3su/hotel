
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIChatConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: "Velkommen! I'm your Havhotellet virtual host. How can I help plan your stay today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are a warm, professional concierge for Havhotellet in Norway. 
          The hotel is on a pier in Spangereid, Lindesnes. 
          Key features: 
          - Sea views from every room.
          - Free access to Lindesnes Lighthouse for guests.
          - Culinary highlights: À la Carte Restaurant by Chef Bernt Sætre, "The Laboratory" for interactive group dining.
          - Activities: Kayaking, biking, SUP, hiking.
          - Facilities: Gym, BBQ, Playground.
          Answer in a friendly tone. Keep responses concise and focused on helping the user book or enjoy their stay. Use Norwegian or English as requested.`,
        },
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || "I'm having a bit of trouble connecting to the waves. Please try again later!" }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "Apologies, our lighthouse signal is a bit weak right now. Can I help with anything else?" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-[2rem] shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-fade-in-up">
          <div className="bg-ocean-dark p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
              </div>
              <div>
                <h3 className="font-bold text-sm">Hotel Concierge</h3>
                <p className="text-[10px] text-white/60">Powered by Gemini AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-gray-50 text-ocean-dark rounded-bl-none border border-gray-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-50 px-4 py-3 rounded-2xl flex gap-1 items-center border border-gray-100">
                  <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything about Havhotellet..."
              className="flex-1 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-sm h-12 px-4"
            />
            <button 
              onClick={handleSend}
              className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-ocean-dark text-white' : 'bg-primary text-white'
        }`}
      >
        <span className="material-symbols-outlined text-3xl">
          {isOpen ? 'close' : 'chat_bubble'}
        </span>
      </button>
    </div>
  );
};

export default AIChatConcierge;
