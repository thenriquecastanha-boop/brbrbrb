import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MenuSections, OrderButton } from '@/components/restaurant';
import { menuCategories, pageHead } from '@/lib/menu';

export const Route = createFileRoute('/cardapio')({
  head: () => pageHead('Cardápio', 'Cardápio completo da GranPizza Express em Curitiba: pizzas clássicas, premium, Gran Sabores, doces, calzones, porções e bebidas, com preços e tamanhos.'),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState('todas');
  const shown = active === 'todas' ? menuCategories : menuCategories.filter(c => c.id === active);
  const totalItems = menuCategories.reduce((n, c) => n + c.items.length, 0);
  return (
    <main>
      <div className="wrap page-heading">
        <span className="eyebrow text-primary">Seu próximo sabor favorito</span>
        <h1>Nosso cardápio</h1>
        <p>{totalItems} opções em {menuCategories.length} categorias — das clássicas de sempre às pizzas que só a GranPizza faz. Escolha o tamanho e a gente cuida do resto.</p>
      </div>
      <div className="menu-cat-bar" aria-label="Categorias do cardápio">
        <div className="wrap menu-cat-inner">
          <Button variant={active === 'todas' ? 'default' : 'outline'} aria-pressed={active === 'todas'} onClick={() => setActive('todas')}>Todas</Button>
          {menuCategories.map(c => (
            <Button key={c.id} variant={active === c.id ? 'default' : 'outline'} aria-pressed={active === c.id} onClick={() => setActive(c.id)}>{c.name}</Button>
          ))}
        </div>
      </div>
      <div className="wrap menu-content">
        <MenuSections categories={shown} />
        <div className="visit-band">
          <div>
            <span className="eyebrow text-primary mb-3">Ainda em dúvida?</span>
            <h2>A gente ajuda a escolher.</h2>
            <p>Conte quantos vão comer e a gente sugere as pizzas, porções e bebidas certas para a sua noite.</p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <OrderButton>Montar meu pedido</OrderButton>
            <Button asChild variant="outline"><a href="tel:+554130152521"><Phone /> (41) 3015-2521</a></Button>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">Preços de tamanho único: calzones e porções. Pizzas nos tamanhos Grande, Brotinho e GranCrek. Consulte ingredientes e disponibilidade ao pedir.</p>
      </div>
    </main>
  );
}
