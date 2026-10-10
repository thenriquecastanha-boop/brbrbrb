import hero from '@/assets/pizza-hero.jpg';
import bufala from '@/assets/pizza-bufala.jpg';
import chef from '@/assets/pizza-chef.jpg';
import banoffee from '@/assets/pizza-banoffee.jpg';

export type MenuItem = { name: string; description?: string; badge?: string; price?: string };
export type MenuSize = { label: string; value: string };
export type MenuCategory = {
  id: string;
  name: string;
  subtitle: string;
  sizes?: MenuSize[];
  note?: string;
  items: MenuItem[];
};

const grande = (value: string, brotinho: string, grancrek: string): MenuSize[] => [
  { label: 'Grande', value },
  { label: 'Brotinho', value: brotinho },
  { label: 'GranCrek', value: grancrek },
];

export const menuCategories: MenuCategory[] = [
  {
    id: 'classicas',
    name: 'Pizzas Clássicas',
    subtitle: 'As que todo mundo ama',
    sizes: grande('R$ 79,90', 'R$ 34,90', 'R$ 29,90'),
    items: [
      { name: 'Alioli', description: 'O sabor intenso do alho granulado sobre mussarela derretida e massa quentinha. Para os fãs do tempero de verdade.' },
      { name: 'Bauru', description: 'Presunto, tomate em rodelas, parmesão ralado e muito queijo. Um clássico brasileiro que nunca sai de moda.' },
      { name: 'Calabresa', badge: 'Sabor que representa', description: 'A queridinha de todos os tempos: calabresa fatiada bem fininha, mussarela e orégano, com sabor intenso do início ao fim.' },
      { name: 'Canadianse', description: 'Lombo fatiado com champignon e queijo derretido. Uma combinação suave e saborosa com toque especial.' },
      { name: 'Champignon', description: 'Delicados cogumelos fatiados sobre mussarela cremosa e molho especial. Leve, elegante e saborosa.' },
      { name: 'Havaiana', description: 'Lombo suculento e pedaços de abacaxi que derretem na boca. Doce e salgado em perfeita harmonia.' },
      { name: 'Marguerita', description: 'A clássica italiana com frescor de tomate, folhas de manjericão fresco e mussarela derretida. Simples, aromática e deliciosa.' },
      { name: 'Milho & Bacon', description: 'O defumado do bacon e a leveza do milho criam uma pizza equilibrada e cheia de sabor. Crocante e cremosa na medida certa.' },
      { name: 'Mussarela', description: 'A base de tudo: queijo derretido no ponto certo, com molho de tomate e azeitonas verdes. Tradicional e sempre bem-vinda.' },
      { name: 'Napolitana', description: 'Rodelas de tomate fresco, parmesão e orégano sobre queijo derretido. Leve, rústica e com sabor caseiro.' },
      { name: 'Palmito', description: 'Cubos de palmito macios e bem temperados sobre uma base cremosa de queijo e molho. Sabor suave, mas marcante.' },
      { name: 'Parmegiana', description: 'Parmesão ralado sobre camada generosa de mussarela e muito molho artesanal de tomate. Uma combinação de queijos para quem valoriza sabor e simplicidade.' },
    ],
  },
  {
    id: 'premium',
    name: 'Pizzas Premium',
    subtitle: 'Sabor além do comum',
    sizes: grande('R$ 109,90', 'R$ 39,90', 'R$ 34,90'),
    items: [
      { name: 'Abobrinha Suprema', description: 'Leve, sofisticada e cheia de sabor. Abobrinha em fatias, tomate cereja, alho crocante e parmesão ralado trazem um toque gourmet que surpreende a cada mordida.' },
      { name: 'Atum', description: 'Atum desfiado, mussarela derretida e orégano fresco sobre massa leve. Uma escolha clássica para quem aprecia sabor intenso com suavidade.' },
      { name: 'Blumenau', description: 'A famosa linguiça Blumenau ralada com cebola roxa e um leve toque cítrico do limão à francesa. Uma pizza com personalidade forte e final marcante.' },
      { name: 'Brócolis & Bacon', description: 'Equilíbrio entre o fresco e o defumado: brócolis cozidos no ponto certo, cubos de bacon crocante, alho granulado e orégano sobre uma base cremosa de mussarela.' },
      { name: 'Calabresa Suprema', badge: 'Escolha do Chef', description: 'Uma versão turbinada do clássico: calabresa fatiada, bacon em cubos e o inconfundível Catupiry oficial. Sabor e cremosidade em cada pedaço.' },
      { name: 'Calabresa Roxa', description: 'Calabresa fininha, cebola roxa adocicada e uma chuva de parmesão ralado. Um toque a mais de elegância no sabor de sempre.' },
      { name: 'Da Casa', description: 'A combinação que representa a essência da GranPizza: calabresa, bacon, milho e muito queijo. Simples, generosa e cheia de sabor.' },
      { name: 'Frango & Catupiry', description: 'Frango desfiado temperado e Catupiry oficial sobre base de mussarela. Cremosa, leve e sempre entre as favoritas.' },
      { name: 'Frango Cremoso', description: 'Frango desfiado, bacon em cubos, cream cheese e cebolete fresca. Equilibrada e com um toque defumado irresistível.' },
      { name: 'Frango Supremo', description: 'A pizza completa: frango desfiado, milho, palmito, provolone e Catupiry. Sabor, cremosidade e fartura para quem quer tudo em uma só fatia.' },
      { name: 'GranFamília', description: 'Lombo, calabresa e bacon se encontram em uma pizza robusta, com muito parmesão e sabor de casa cheia. Ideal para dividir (ou não).' },
      { name: 'Lombo & Catupiry', description: 'Fatias generosas de lombo com o toque cremoso e autêntico do Catupiry oficial. Um sabor suculento que conquista pela simplicidade.' },
      { name: 'Pepperoni', description: 'Fatias de pepperoni sobre queijo derretido e massa crocante. Picante na medida certa e sempre uma escolha certeira.' },
      { name: 'Peppec cheese', description: 'Pepperoni + Cream Cheese oficial: uma dupla poderosa que une intensidade e cremosidade. Um clássico moderno que conquista rápido.' },
      { name: 'Portuguesa', description: 'Presunto, ovo cozido, cebola e azeitonas verdes sobre mussarela derretida. A legítima portuguesa, feita com sabor e tradição.' },
      { name: '4 Queijos', description: 'Catupiry oficial, provolone, parmesão e mussarela. Quatro queijos que se complementam em textura, aroma e sabor.' },
      { name: '5 Queijos', description: 'O equilíbrio perfeito entre cinco intensidades: mussarela, provolone, parmesão, gorgonzola e Catupiry oficial. Cremosa, aromática e simplesmente irresistível.' },
    ],
  },
  {
    id: 'gran-sabores',
    name: 'Pizzas Gran Sabores',
    subtitle: 'Um show de sabor exclusivo',
    sizes: grande('R$ 139,90', 'R$ 44,90', 'R$ 39,90'),
    items: [
      { name: 'Amêndoa', description: 'Sofisticação em cada mordida: gorgonzola cremoso, mussarela, tomate cereja e lâminas crocantes de amêndoas. Finalizada com orégano para equilibrar. Delicada, marcante e surpreendente.' },
      { name: 'Canastra', badge: 'Favorita da casa', description: 'Uma explosão de texturas e sabores brasileiros! Presunto, palmito em cubos, tomate cereja e a união cremosa do queijo mussarela com o famoso queijo Canastra, direto da Serra. Finalizada com cebolete fresca e muito sabor.' },
      { name: 'Caprese', description: 'Um clássico italiano reinventado: fatias de tomate, mussarela de búfala e pesto artesanal de manjericão. Um frescor que derrete na boca com um toque suave de orégano.' },
      { name: 'Costela & Barbecue', description: 'Costela desfiada no fogo de chão, coberta com cebola roxa e finalizada com o toque agridoce do molho barbecue. Uma combinação intensa e suculenta.' },
      { name: 'Costela & Catupiry', description: 'Costela fogo de chão desfiada com o inconfundível Catupiry oficial sobre uma base cremosa de queijo e molho. Combinação irresistível de textura e sabor.' },
      { name: 'Mozzarela de Búfala', description: 'Mussarela de búfala cremosa, tomate cereja, folhas frescas de manjericão e um fio de azeite de oliva. Leve, aromática e perfeita para quem busca sofisticação no paladar.' },
      { name: 'Nordestina', description: 'Sabor regional em alta potência! Carne seca desfiada, queijo coalho, cebola refogada e manteiga de garrafa — tudo finalizado com cebolete e orégano. Uma verdadeira homenagem ao Nordeste.' },
      { name: 'Tulha', description: 'A joia da casa! O raro queijo Tulha, maturado por 12 meses, com cristais que derretem na boca e sabor frutado inconfundível. Acompanhado de mussarela e azeitonas pretas. Um sabor nobre e inesquecível.' },
    ],
  },
  {
    id: 'doces-especiais',
    name: 'Pizzas Doces Especiais',
    subtitle: 'Porque toda pizza merece um final assim',
    sizes: grande('R$ 79,90', 'R$ 39,90', 'R$ 34,90'),
    items: [
      { name: 'Banoffee', badge: 'Favorita da casa', description: 'Camada generosa de doce de leite Moça, banana madura, farofa crocante de cookie e lascas de chocolate branco. Uma sobremesa em formato de pizza!' },
      { name: 'Brigadeiro & Morango', description: 'Brigadeiro feito com leite Moça, morangos frescos e cobertura de chocolate granulado. Doce na medida e impossível de resistir.' },
      { name: 'Chocolate Branco & Morango', description: 'Chocolate branco derretido e morangos frescos sobre creme de leite. Um sabor leve, delicado e incrivelmente romântico.' },
      { name: 'Chocolate Preto & Morango', description: 'A combinação perfeita do chocolate meio amargo com a acidez do morango. Um clássico que nunca sai de moda.' },
      { name: 'Chocolate Preto & Confetes', description: 'Chocolate preto cremoso com cobertura colorida de confetes crocantes. Divertida, deliciosa e feita pra todas as idades.' },
      { name: 'Doce de Leite & Morango', description: 'Doce de leite Moça com morangos frescos sobre creme suave. Uma combinação intensa, cremosa e com frescor na medida.' },
      { name: 'Doce de Leite, Amêndoas & Castanhas', description: 'Doce de leite Moça, amêndoas laminadas e castanhas de caju crocantes. Uma mistura sofisticada, doce e cheia de textura.' },
      { name: 'Nutella & Confetes', description: 'Nutella derretida com toque de creme de leite, finalizada com confetes crocantes. Divertida, vibrante e absolutamente viciante.' },
      { name: 'Nutella & Morango', description: 'O clássico que nunca decepciona: Nutella cremosa e morangos frescos em uma união que é puro amor.' },
    ],
  },
  {
    id: 'doces',
    name: 'Doces',
    subtitle: 'O final feliz da sua pizza',
    sizes: grande('R$ 69,90', 'R$ 34,90', 'R$ 29,90'),
    items: [
      { name: 'Banana & Canela', description: 'Fatias de banana douradas, polvilhadas com açúcar e canela na medida certa. Um clássico quentinho, com gostinho de casa e aconchego.' },
      { name: 'Chocolate Branco', description: 'Creme de leite e chocolate branco derretido, cobertos com gotas extras que derretem na boca. Doce, suave e extremamente cremoso.' },
      { name: 'Chocolate Preto', description: 'Uma explosão de sabor: chocolate preto e creme de leite combinados em uma camada cremosa e intensa, finalizada com gotas irresistíveis de chocolate.' },
      { name: 'Dois Amores', description: 'Para quem não quer escolher: chocolate branco e preto se encontram sobre uma base cremosa. Um encontro doce e perfeito de sabores que se completam.' },
    ],
  },
  {
    id: 'calzones',
    name: 'Calzones',
    subtitle: 'Sabor que transborda',
    sizes: [{ label: 'Grande', value: 'R$ 99,90' }],
    note: 'Tamanho único · 700g de recheio',
    items: [
      { name: 'Calzone Bauru', description: 'Presunto, tomate em rodelas, parmesão ralado e muito queijo derretido. Um clássico recheado com sabor e nostalgia.' },
      { name: 'Calzone Calabresa', description: 'Calabresa fatiada com bastante queijo e o toque final do orégano. Simples, intenso e muito bem servido.' },
      { name: 'Calzone Calabresa Roxa', description: 'A versão especial do tradicional: calabresa, cebola roxa adocicada e parmesão. Sabor com mais personalidade!' },
      { name: 'Calzone da Casa', badge: 'Campeão de Vendas', description: 'A combinação que representa a GranPizza: calabresa, bacon crocante, milho e queijo no ponto. Suculento do início ao fim.' },
      { name: 'Calzone Frango & Catupiry', description: 'Frango desfiado e catupiry oficial em um recheio super cremoso, envolvido por massa macia. Um dos mais pedidos — e com razão!' },
      { name: 'Calzone GranFamília', description: 'Lombo, calabresa, bacon e parmesão. Uma receita generosa com sabores marcantes em cada mordida. Ideal pra dividir (ou não).' },
      { name: 'Calzone Lombo & Catupiry', description: 'Lombo suculento e catupiry oficial se encontram em um calzone que derrete na boca. Uma escolha clássica com toque especial.' },
      { name: 'Calzone Marguerita', description: 'Tomate em rodelas, mussarela e folhas frescas de manjericão. Leve, aromático e com sabor italiano autêntico.' },
      { name: 'Calzone Milho & Bacon', description: 'Milho e bacon crocante envoltos em queijo derretido. A mistura perfeita de doçura e defumado, em uma versão generosamente recheada.' },
      { name: 'Calzone Pepperoni', description: 'Pepperoni fatiado e queijo derretido em abundância. Picante, suculento e irresistível — o sabor que conquista.' },
      { name: 'Calzone Portuguesa', description: 'Presunto, ovo, cebola, azeitonas verdes e muito queijo. A clássica portuguesa agora em formato de calzone. Tradição com recheio de sobra!' },
      { name: 'Calzone 4 Queijos', badge: 'Explosão de queijo', description: 'Catupiry oficial, parmesão, provolone e mussarela. Quatro queijos derretidos em harmonia cremosa dentro de uma massa perfeita.' },
    ],
  },
  {
    id: 'pizza-burguer',
    name: 'Pizza Burguer',
    subtitle: 'Dois mundos, um sabor!',
    sizes: [{ label: 'Tamanho único', value: 'R$ 39,90' }],
    items: [
      { name: 'Pizza Burguer', description: 'A combinação perfeita: massa leve, molho especial, queijo derretido, presunto, hambúrguer suculento, tomate fresquinho e orégano. O sabor de dois mundos em uma só mordida! Consulte o sabor do hambúrguer do dia com nossa equipe.' },
    ],
  },
  {
    id: 'porcoes',
    name: 'Porções',
    subtitle: 'Para completar o seu momento!',
    sizes: [{ label: 'Porção', value: 'R$ 29,90' }],
    items: [
      { name: 'Batata Frita', description: '350g de batatas douradas, crocantes por fora e macias por dentro. Acompanhamento clássico que todo mundo ama!' },
      { name: 'Batata Frita & Parmesão', description: 'Nossas batatas crocantes ganham um toque especial com parmesão ralado na hora. Sabor que faz diferença!' },
      { name: 'Batata Frita, Bacon & Cheddar', description: 'Batatas crocantes cobertas com bacon em cubos, cheddar cremoso e um toque fresco de cebolete. Uma porção generosa e irresistível!' },
      { name: 'Calabresa', description: '350g de calabresa fatiada e assada no ponto certo. Sabor marcante e perfeito para compartilhar!' },
      { name: 'Calabresa & Cebola', description: 'A combinação que não tem erro: calabresa fatiada assada com cebola dourada. Suculento e aromático!' },
      { name: 'Crostini, Mussarela & Parmesão', description: '10 fatias de massa de pizza crocante, cobertas com queijo mussarela e parmesão derretido. O petisco perfeito para abrir o apetite!' },
      { name: 'Crostini, Mussarela & Presunto', description: '10 fatias de massa de pizza crocante com mussarela derretida e presunto ralado. Leve, saboroso e cheio de crocância!' },
    ],
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    subtitle: 'Para brindar, refrescar e combinar com a sua pizza!',
    items: [
      { name: 'Água', price: 'R$ 6,00' },
      { name: 'Chá Matte', price: 'R$ 8,00' },
      { name: 'Refrigerante', price: 'R$ 8,00' },
      { name: 'Suco Del Valle', price: 'R$ 8,00' },
      { name: 'Suco Natural', price: 'R$ 12,00' },
      { name: 'H2O', price: 'R$ 10,00' },
      { name: 'Cini', price: 'R$ 10,00' },
      { name: 'Cerveja 600ml', price: 'R$ 20,00' },
      { name: 'Cerveja Latão', price: 'R$ 15,00' },
      { name: 'Cerveja Long Neck', price: 'R$ 15,00' },
      { name: 'Chopp', price: 'R$ 12,00' },
      { name: 'Energético', price: 'R$ 20,00' },
      { name: 'Cachaça', description: 'Dose', price: 'R$ 15,00' },
      { name: 'Campari', description: 'Dose', price: 'R$ 15,00' },
      { name: 'Vodka Nacional', description: 'Dose', price: 'R$ 15,00' },
      { name: 'Vodka Importada', description: 'Dose', price: 'R$ 20,00' },
      { name: 'Gin', description: 'Dose', price: 'R$ 20,00' },
      { name: 'Jack', description: 'Dose', price: 'R$ 25,00' },
      { name: 'Gin Tônica', price: 'R$ 28,00' },
      { name: 'Jack & Coke', price: 'R$ 33,00' },
      { name: 'Vinho', description: 'Taça', price: 'R$ 15,00' },
      { name: 'Vinho', description: 'Garrafa', price: 'Consulte valores' },
    ],
  },
];

export const products = [
  { name: 'Marguerita', category: 'Salgadas', image: hero, tag: 'A clássica', note: 'Um clássico que nunca sai de moda.' },
  { name: 'Mozzarela de Búfala', category: 'Salgadas', image: bufala, tag: 'Especial', note: 'Uma das especialidades da casa.' },
  { name: 'Pizza do Chef', category: 'Salgadas', image: chef, tag: 'Escolha do chef', note: 'O toque especial da GranPizza.' },
  { name: 'Banoffee', category: 'Doces', image: banoffee, tag: 'Para adoçar', note: 'Um final doce para a sua noite.' },
];

export const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Pizzaria GranPizza Express R. Sen. Xavier da Silva 225 Curitiba');

export function pageHead(title: string, description: string) {
  return { meta: [{ title: title + ' | GranPizza Express' }, { name: 'description', content: description }, { property: 'og:title', content: title + ' | GranPizza Express' }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
