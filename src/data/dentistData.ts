import { Treatment, Testimonial, BlogPost } from '../types';
import doctorImage from '../assets/images/IMG_1590.JPG';
import logoImage from '../assets/images/logo_dr_yan_official_1786326041653.jpg';
import clinicImage from '../assets/images/clinic_reception_1786324230194.jpg';
import patientCamilaImage from '../assets/images/patient_camila_1786324240454.jpg';
import urgenciaImage from '../assets/images/urgencia_odontologica_1786325639602.jpg';

export const DENTIST_INFO = {
  name: "Dr. Yan Guilherme",
  title: "Cirurgião-Dentista | CRO-PE 21214",
  specialties: "Especializando em Implantodontia e Prótese Dentária (UFPE)",
  location: "Porto de Galinhas, PE",
  phone: "(81) 99557-4121",
  whatsappNumber: "5581995574121",
  whatsappFormatted: "(81) 99557-4121",
  email: "contato@dryanguilherme.com.br",
  address: "Av. Principal de Porto de Galinhas, Empresarial Mar de Galinhas, Sala 204 - Porto de Galinhas, Ipojuca - PE",
  hours: "Segunda a Sexta: 08:00h às 18:00h | Sábado: 08:00h às 12:00h",
  doctorImage,
  logoImage,
  clinicImage,
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'urgencia-odontologica',
    title: 'Urgência Odontológica',
    shortDesc: 'Atendimento prioritário e alívio imediato da dor de dente intensa, fraturas e traumatismos dentários em Porto de Galinhas.',
    fullDesc: 'A Urgência Odontológica oferece atendimento rápido e humanizado focado na eliminação imediata do desconforto. Atendemos casos graves como dores agudas de dente (odontalgia), fraturas por queda ou acidente, traumatismos, restaurações soltas e abcessos com protocolos farmacológicos e anestesia computadorizada de ação imediata.',
    benefits: [
      'Dor de Dente (Odontalgia Aguda): Diagnóstico emergencial, analgesia potente e tratamento de canal imediato',
      'Fratura Dentária: Colagem de fragmentos, restauração estética em resina bioativa e contenção rápida',
      'Atendimento Rápido: Prioridade na agenda e triagem imediata via WhatsApp',
      'Controle Total da Dor: Anestesia computadorizada indolor para total conforto do paciente'
    ],
    imageUrl: urgenciaImage,
    tag: 'Urgência'
  },
  {
    id: 'implantes',
    title: 'Implantes Dentários',
    shortDesc: 'Soluções seguras e definitivas para substituir dentes perdidos com máxima naturalidade.',
    fullDesc: 'O implante dentário é a melhor solução para substituir raízes perdidas e devolver a capacidade mastigatória e o sorriso estético. Trabalhamos com implantes de alta precisão biocompatíveis e carga imediata quando indicado.',
    benefits: [
      'Preservação da estrutura óssea facial',
      'Mastigação firme e sem desconforto',
      'Aparência 100% natural',
      'Procedimento guiado e indolores com anestesia moderna'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    tag: 'Reabilitação'
  },
  {
    id: 'lentes-facetas',
    title: 'Lentes e Facetas de Porcelana',
    shortDesc: 'Estética, harmonia e alinhamento impecável para transformar o formato e a cor do seu sorriso.',
    fullDesc: 'As lentes de contato dentárias e facetas são laminados ultra-finos de cerâmica aplicados sobre a superfície dos dentes. Corrigem manchas, pequenos desalinhamentos, desgastes e fraturas com mínima intervenção.',
    benefits: [
      'Planejamento digital do sorriso (Digital Smile Design)',
      'Cor natural, brilho e textura idênticos ao esmalte',
      'Alta durabilidade e resistência a manchas',
      'Mínimo ou nenhum desgaste dental'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    tag: 'Estética'
  },
  {
    id: 'proteses-reabilitacao',
    title: 'Próteses e Reabilitação Oral',
    shortDesc: 'Recupere a função mastigatória completa e a harmonia estética da sua boca com conforto.',
    fullDesc: 'A reabilitação oral combina diversas especialidades para tratar quadros complexos de desgaste dental, falta de dentes e disfunções na articulação temporomandibular (ATM).',
    benefits: [
      'Devolução da dimensão vertical correta do rosto',
      'Melhora expressiva na digestão e mastigação',
      'Próteses fixas sobre implantes ou protocolo',
      'Planejamento customizado para cada paciente'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    tag: 'Reabilitação'
  },
  {
    id: 'clareamento',
    title: 'Clareamento Dental Premium',
    shortDesc: 'Um sorriso visivelmente mais claro, radiante e com protocolo exclusivo para evitar sensibilidade.',
    fullDesc: 'Oferecemos o protocolo de clareamento combinado (consultório + caseiro supervisionado) utilizando géis clareadores de última geração com dessensibilizantes de alta tecnologia.',
    benefits: [
      'Resultados visíveis logo na primeira sessão',
      'Protocolo anti-sensibilidade exclusivo',
      'Clareamento homogêneo e seguro para o esmalte',
      'Acompanhamento fotográfico antes e depois'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    tag: 'Estética'
  },
  {
    id: 'harmonizacao',
    title: 'Harmonização Orofacial',
    shortDesc: 'Equilíbrio sutil e rejuvenescimento facial focado em realçar sua beleza natural.',
    fullDesc: 'Procedimentos estéticos funcionais que equilibram o contorno facial, o lábio e o sorriso. Inclui preenchimento labial estruturado, toxina botulínica e bioestimuladores de colágeno.',
    benefits: [
      'Correção do sorriso gengival',
      'Contorno labial definido e hidratado',
      'Prevenção e suavização de linhas de expressão',
      'Aspecto rejuvenescido e muito natural'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    tag: 'Harmonização'
  },
  {
    id: 'ortodontia-invisivel',
    title: 'Alinhadores Invisíveis',
    shortDesc: 'Ortodontia transparente, rápida e sem o desconforto dos aparelhos metálicos tradicionais.',
    fullDesc: 'Aparelhos ortodônticos removíveis e transparentes feitos sob medida com escaneamento 3D. Permitem higienização normal e não atrapalham suas fotos ou reuniões.',
    benefits: [
      'Praticamente invisível ao falar ou sorrir',
      'Removível para comer e escovar os dentes',
      'Menos consultas e movimentação mais precisa',
      'Sem fios ou braquetes soltos que machucam'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    tag: 'Ortodontia'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Camila R.',
    role: 'Paciente de Lentes de Contato',
    comment: 'O atendimento é impecável! Fiquei receosa de colocar lentes e ficar artificial, mas o Dr. Yan desenhou um sorriso que combinou perfeitamente com meu rosto. O resultado superou todas as minhas expectativas!',
    avatarUrl: patientCamilaImage,
    stars: 5,
    treatment: 'Lentes e Facetas'
  },
  {
    id: '2',
    name: 'Marcelo S.',
    role: 'Paciente de Implantes',
    comment: 'Passei anos com medo de fazer implante por causa da dor. O Dr. Yan me explicou todo o processo no computador e a cirurgia foi extremamente tranquila, sem dor nenhuma! Recomendo de olhos fechados.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    stars: 5,
    treatment: 'Implante Dentário'
  },
  {
    id: '3',
    name: 'Fernanda M.',
    role: 'Paciente de Clareamento & Estética',
    comment: 'Clínica linda em Porto de Galinhas, ambiente super acolhedor e tecnologia surreal. Fiz o clareamento e não senti absolutamente nenhuma sensibilidade. Já quero agendar a próxima consulta de manutenção!',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    stars: 5,
    treatment: 'Clareamento Premium'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Lentes de Porcelana x Facetas em Resina: Qual a melhor opção?',
    summary: 'Entenda as principais diferenças de durabilidade, pigmentação, tempo de execução e indicação para cada tipo de sorriso.',
    category: 'Estética',
    readTime: '3 min de leitura',
    date: '02 de Agosto, 2026',
    content: 'As facetas em resina composta e as lentes de porcelana são excelentes alternativas para transformar o sorriso, porém possuem características distintas. Enquanto a resina pode ser moldada diretamente na boca em uma única sessão, a porcelana exige confecção laboratorial altamente precisa, garantindo maior durabilidade (de 15 a 20 anos) e resistência total a manchas de café e vinho.'
  },
  {
    id: '2',
    title: 'Cuidados essenciais no pós-operatório de Implantes Dentários',
    summary: 'Dicas práticas para uma recuperação rápida, sem dores e com cicatrização óssea perfeita.',
    category: 'Implantes',
    readTime: '4 min de leitura',
    date: '28 de Julho, 2026',
    content: 'A cirurgia de implante hoje em dia é guiada e muito menos invasiva. Nos primeiros 3 dias pós-cirurgia, o repouso relativo, alimentação gelada ou morna e a correta medicação prescrita pelo Dr. Yan são fundamentais para assegurar a osseointegração rápida do implante.'
  },
  {
    id: '3',
    title: 'Como manter dentes brancos por mais tempo após o clareamento',
    summary: 'Aprenda os hábitos e alimentos que preservam a tonalidade radiante conquistada no consultório.',
    category: 'Prevenção',
    readTime: '3 min de leitura',
    date: '15 de Julho, 2026',
    content: 'Após o procedimento de clareamento, o esmalte passa por um curto período de reidratação. Evitar alimentos com pigmentos intensos nas primeiras 48 horas e utilizar canudos para bebidas ácidas são pequenos cuidados que estendem o resultado por muitos anos.'
  }
];

export const FAQS = [
  {
    question: "O tratamento com implante dentário é doloroso?",
    answer: "Não! O procedimento é realizado sob anestesia local moderna e com técnicas minimamente invasivas. A maioria dos pacientes relata apenas um leve desconforto no pós-operatório, perfeitamente controlado por analgésicos simples."
  },
  {
    question: "Quanto tempo dura uma lente de contato de porcelana?",
    answer: "As lentes de porcelana possuem altíssima durabilidade, podendo durar de 15 a 20 anos ou mais quando o paciente mantém uma boa higienização oral e realiza visitas periódicas de manutenção com o cirurgião-dentista."
  },
  {
    question: "Como funciona a consulta de avaliação inicial?",
    answer: "Na primeira consulta realizamos uma anamnese detalhada, exame clínico minuciosos, fotografias da sua face e dentes, além do escaneamento ou análise radiográfica para elaborar um plano de tratamento 100% individualizado."
  },
  {
    question: "Aceita convênios médicos ou planos odontológicos?",
    answer: "Atendemos na modalidade particular para garantir o tempo de consulta necessário, materiais de padrão internacional e atenção dedicada a cada detalhe. Emitimos toda a documentação necessária para reembolso junto ao seu plano odontológico."
  }
];
