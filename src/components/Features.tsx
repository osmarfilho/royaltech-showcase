import { Shield, Truck, CreditCard, Headset } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Garantia Total",
    description: "1 ano de garantia em todos os produtos",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Frete grátis para sua região",
  },
  {
    icon: CreditCard,
    title: "Pagamento Flexível",
    description: "Parcele em até 12x sem juros",
  },
  {
    icon: Headset,
    title: "Suporte 24/7",
    description: "Atendimento sempre disponível",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[var(--shadow-glow)]">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
