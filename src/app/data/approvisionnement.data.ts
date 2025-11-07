import { ApprovisionnementListe } from '../models/gestion-approvisionnement.model';
import { Fournisseur, Article } from '../models/approvisionnement.model';

export const defaultApprovisionnements: ApprovisionnementListe[] = [
  {
    id: '1',
    reference: 'APP-2023-001',
    date: new Date('2023-04-19'),
    fournisseur: 'Textiles Dakar SARL',
    articles: ['Ordinateur portable', 'Souris sans fil', 'Clavier mécanique'],
    montantTotal: 750000,
    statut: 'Reçu'
  },
  {
    id: '2',
    reference: 'APP-2023-002',
    date: new Date('2023-04-10'),
    fournisseur: 'Mercerie Centrale',
    articles: ['Écran 24 pouces', 'Webcam HD'],
    montantTotal: 320000,
    statut: 'Reçu'
  },
  {
    id: '3',
    reference: 'APP-2023-003',
    date: new Date('2023-04-06'),
    fournisseur: 'Tissus Premium',
    articles: ['Imprimante laser', 'Papier A4', 'Cartouches d\'encre', 'Agrafeuse'],
    montantTotal: 450000,
    statut: 'En attente'
  },
  {
    id: '4',
    reference: 'APP-2023-004',
    date: new Date('2023-04-01'),
    fournisseur: 'Textiles Dakar SARL',
    articles: ['Chaises de bureau', 'Bureau réglable', 'Lampe de bureau'],
    montantTotal: 680000,
    statut: 'Reçu'
  },
  {
    id: '5',
    reference: 'APP-2023-005',
    date: new Date('2023-03-26'),
    fournisseur: 'Mercerie Centrale',
    articles: ['Téléphone IP', 'Casque audio'],
    montantTotal: 520000,
    statut: 'Reçu'
  }
];

export const defaultFournisseurs: Fournisseur[] = [
  { id: '1', nom: 'Textiles Dakar SARL' },
  { id: '2', nom: 'Mercerie Centrale' },
  { id: '3', nom: 'Tissus Premium' },
  { id: '4', nom: 'Fournisseur A' },
  { id: '5', nom: 'Fournisseur B' }
];

export const defaultArticles: Article[] = [
  { id: '1', nom: 'Ordinateur portable' },
  { id: '2', nom: 'Souris sans fil' },
  { id: '3', nom: 'Clavier mécanique' },
  { id: '4', nom: 'Écran 24 pouces' },
  { id: '5', nom: 'Webcam HD' },
  { id: '6', nom: 'Imprimante laser' },
  { id: '7', nom: 'Papier A4' },
  { id: '8', nom: 'Cartouches d\'encre' }
];