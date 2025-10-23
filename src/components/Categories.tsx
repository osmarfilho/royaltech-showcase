import { Card } from "@/components/ui/card";
import { Smartphone, Headphones, Watch, Laptop } from "lucide-react";

const categories = [
  {
    icon: Smartphone,
    name: "Smartphones",
    count: "50+ modelos",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: Headphones,
    name: "Acessórios",
    count: "100+ produtos",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Watch,
    name: "Smartwatches",
    count: "30+ modelos",
    gradient: "from-pink-500 to-red-600",
  },
  {
    icon: Laptop,
    name: "Tablets",
    count: "25+ modelos",
    gradient: "from-indigo-500 to-blue-600",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Categorias</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore nossa ampla variedade de produtos tecnológicos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={category.name}
              className="relative overflow-hidden border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-8 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
