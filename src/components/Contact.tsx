import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para ajudar você a encontrar o smartphone perfeito
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8 animate-fade-in">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <Input placeholder="Seu nome completo" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefone</label>
                <Input type="tel" placeholder="(00) 00000-0000" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <Textarea placeholder="Como podemos ajudar?" rows={4} />
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <Card className="p-6 flex items-start gap-4 hover:shadow-[var(--shadow-card)] transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Localização</h3>
                <p className="text-sm text-muted-foreground">
                  Av. Principal, 1234 - Centro
                  <br />
                  São Paulo, SP - 01234-567
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4 hover:shadow-[var(--shadow-card)] transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Telefone</h3>
                <p className="text-sm text-muted-foreground">
                  (11) 99999-9999
                  <br />
                  Seg-Sex: 9h às 18h
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4 hover:shadow-[var(--shadow-card)] transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">
                  contato@royaltech.com.br
                  <br />
                  Resposta em até 24h
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
