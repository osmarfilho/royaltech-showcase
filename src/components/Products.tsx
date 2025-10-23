import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import phone1 from "@/assets/phone-1.jpg";
import phone2 from "@/assets/phone-2.jpg";
import phone3 from "@/assets/phone-3.jpg";

const products = [
  {
    id: 1,
    name: "Galaxy Premium X",
    price: "R$ 3.999",
    rating: 4.9,
    image: phone1,
    specs: "128GB • 5G • Tela 6.5\"",
  },
  {
    id: 2,
    name: "Royal Pro Max",
    price: "R$ 4.499",
    rating: 5.0,
    image: phone2,
    specs: "256GB • 5G • Tela 6.7\"",
  },
  {
    id: 3,
    name: "Tech Elite Plus",
    price: "R$ 3.299",
    rating: 4.8,
    image: phone3,
    specs: "128GB • 5G • Tela 6.4\"",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Produtos em{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Destaque
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escolha entre os smartphones mais avançados e populares do mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="overflow-hidden border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-semibold">{product.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.specs}</p>
                <div className="text-3xl font-bold text-primary">{product.price}</div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity group">
                  <ShoppingCart className="mr-2 w-5 h-5" />
                  Adicionar ao Carrinho
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
