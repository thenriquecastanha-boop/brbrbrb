import { createContext, useContext, useState, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, ArrowRight, Pizza, ShoppingBag, Menu, X, Phone, Star, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { products, type MenuCategory } from '@/lib/menu';
const OrderContext = createContext<(product?:string)=>void>(()=>{});
export function useOrder() { return useContext(OrderContext); }
export function Brand() { return <Link to="/" className="brand" aria-label="GranPizza Express início"><span className="brand-symbol"><Pizza size={25} strokeWidth={1.4}/></span><span className="brand-name">GranPizza<span className="brand-sub">EXPRESS</span></span></Link>; }
export function Stars() { return <span className="stars" aria-label="5 estrelas">{[1,2,3,4,5].map(n=><Star key={n}/>)}</span>; }
export function RestaurantShell({children}:{children:ReactNode}) {
 const [open,setOpen]=useState(false); const [product,setProduct]=useState(''); const [mobile,setMobile]=useState(false);
 const order=(name?:string)=>{setProduct(name??'');setOpen(true);};
 const nav=<><Link to="/" className="nav-link" onClick={()=>setMobile(false)}>Início</Link><Link to="/cardapio" className="nav-link" onClick={()=>setMobile(false)}>Cardápio</Link><Link to="/sobre" className="nav-link" onClick={()=>setMobile(false)}>Nossa casa</Link><Link to="/contato" className="nav-link" onClick={()=>setMobile(false)}>Contato</Link></>;
 return <OrderContext.Provider value={order}><header className="site-header"><div className="wrap header-inner"><Brand/><nav className="desktop-nav" aria-label="Navegação principal">{nav}</nav><Button className="header-order" onClick={()=>order()}><ShoppingBag/> Fazer meu pedido <ArrowUpRight/></Button><Button variant="ghost" size="icon" className="mobile-toggle" aria-label={mobile?'Fechar menu':'Abrir menu'} onClick={()=>setMobile(!mobile)}>{mobile?<X/>:<Menu/>}</Button></div></header>{mobile&&<nav className="mobile-nav" aria-label="Navegação móvel">{nav}</nav>}{children}<footer className="site-footer"><div className="wrap footer-inner"><Brand/><span className="footer-note">São Francisco, Curitiba · Feita para compartilhar bons momentos.</span><span className="footer-note">© {new Date().getFullYear()} GranPizza Express</span></div></footer><div className="mobile-order"><span>Uma boa pizza.<br/><span className="text-muted-foreground font-normal">Uma noite melhor.</span></span><Button onClick={()=>order()}><ShoppingBag/> Fazer meu pedido</Button></div><Dialog open={open} onOpenChange={setOpen}><DialogContent className="max-w-md"><DialogTitle className="font-display text-3xl">Vamos de GranPizza?</DialogTitle><DialogDescription>{product?`Sua escolha: ${product}.`:'Sua próxima pizza está a uma ligação de distância.'} Consulte tamanhos, ingredientes, preços e disponibilidade com a nossa equipe.</DialogDescription>{product&&<div className="bg-secondary p-4 rounded-md flex gap-3 items-center"><Pizza className="text-primary"/><strong>{product}</strong></div>}<Button asChild size="lg"><a href="tel:+554130152521"><Phone/> Ligar e pedir · (41) 3015-2521</a></Button><p className="text-xs text-muted-foreground text-center">Entrega, retirada ou uma mesa na nossa casa.</p></DialogContent></Dialog></OrderContext.Provider>;
}
export function ProductGrid({category='Todos'}:{category?:string}) { const order=useOrder(); return <div className="product-grid">{products.filter(p=>category==='Todos'||category==='Mais pedidos'||p.category===category).map(p=><article className="product-card" key={p.name}><div className="product-photo"><img src={p.image} alt={`Pizza ${p.name} — imagem ilustrativa`} loading="lazy" width={1024} height={768}/><span className="product-tag">{p.tag}</span></div><div className="product-info"><h3>{p.name}</h3><p>{p.note}</p><div className="product-bottom"><span className="text-muted-foreground">Consulte as opções</span><Button variant="outline" size="icon" aria-label={`Pedir ${p.name}`} onClick={()=>order(p.name)}><Plus/></Button></div></div></article>)}</div>; }
export function OrderButton({children='Fazer meu pedido'}:{children?:ReactNode}) { const order=useOrder();return <Button variant="hero" onClick={()=>order()}><ShoppingBag/>{children}<ArrowRight/></Button>; }
export function MenuSections({categories}:{categories:MenuCategory[]}) {
 const order=useOrder();
 return <div>{categories.map(cat=>{
  const extraLine=(price?:string)=>price?undefined:(cat.sizes&&cat.sizes.length>1?cat.sizes.slice(1).map(s=>s.label+' '+s.value).join(' · '):cat.note);
  return <section className="menu-section" key={cat.id} id={cat.id}>
   <header className="menu-section-head"><div><span className="eyebrow text-primary">{cat.subtitle}</span><h2>{cat.name}</h2></div>{cat.sizes&&<ul className="size-chips">{cat.sizes.map(s=><li key={s.label}><span>{s.label}</span><strong>{s.value}</strong></li>)}</ul>}</header>
   <div className="item-list">{cat.items.map(item=>{
    const price=item.price??cat.sizes?.[0]?.value; const extra=extraLine(item.price);
    return <article className="item-row" key={cat.id+item.name+(item.description??'')}>
     <div className="item-copy"><h3>{item.name}{item.badge&&<span className="item-badge">{item.badge}</span>}</h3>{item.description&&<p>{item.description}</p>}</div>
     <div className="item-side">{price&&<span className="item-price">{price}</span>}{extra&&<span className="item-sizes">{extra}</span>}<Button variant="outline" size="sm" onClick={()=>order(item.name)}><Plus/> Pedir</Button></div>
    </article>;})}</div>
  </section>;})}</div>;
}
