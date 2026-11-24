import { translate } from './i18n';
const pack = (name) => `${import.meta.env.BASE_URL}images/${name}.webp`;
const asset = (name) => `${import.meta.env.BASE_URL}images/${name}.jpg`;
export const shop = {
  name: 'WE MART', contact: 'Nikhil Sethi', phone: '7011639263', whatsapp: '917011639263',
  address: 'A-25/2, Om Vihar, Near Gagan Bharti school, Uttam Nagar, 110059',
  gst: '07APUPR2497H1Z2',
};
export const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(shop.address)}`;
export const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(shop.address)}&output=embed`;
export const whatsapp = (product, language = 'en') => {
  const message = language === 'hi'
    ? (product ? `नमस्ते WE MART, मुझे ${translate(product, 'hi')} के थोक भाव और उपलब्धता की जानकारी चाहिए।` : 'नमस्ते, मुझे थोक भाव और उत्पादों की उपलब्धता की जानकारी चाहिए।')
    : (product ? `Hello WE MART, I would like to enquire about wholesale prices and availability for ${product}.` : 'Hello, I would like to enquire about wholesale prices and product availability.');
  return `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(message)}`;
};
export const categories = [
  { id: 'eggs', name: 'Eggs', image: asset('eggs'), note: 'An everyday essential' },
  { id: 'biscuits', name: 'Biscuits & Cookies', image: pack('good-day'), note: 'Little bites, big smiles' },
  { id: 'snacks', name: 'Chips & Snacks', image: pack('lays'), note: 'For every snack break' },
  { id: 'beverages', name: 'Soft Drinks & Beverages', image: asset('drinks'), note: 'Refresh your day' },
  { id: 'bakery', name: 'Bread, Cakes & Bakery', image: `${import.meta.env.BASE_URL}images/bread.png`, note: 'Packaged favourites for every day' },
  { id: 'grocery', name: 'Milk, Dairy & Grocery', image: pack('amul'), note: 'Your daily staples' },
];
// Prices for eggs and cakes are deliberately null. Add numeric INR values here
// later, and optionally a priceUnit (for example, a confirmed pack size).
// Photos show representative packaging; confirm variants and stock on WhatsApp.
export const products = [
  { id: 'eggs', name: 'Eggs', category: 'eggs', image: asset('eggs'), price: null, priceUnit: '', description: 'Enquire about trays, quantities and wholesale rates.' },
  { id: 'bread', name: 'Packaged breads', category: 'bakery', image: `${import.meta.env.BASE_URL}images/bread.png`, description: 'Harvest Gold, English Oven, Britannia and more. Ask about packs and wholesale rates.' },
  { id: 'good-day', name: 'Britannia Good Day', category: 'biscuits', image: pack('good-day'), description: 'Packaged cookies for your tea break. Ask about variants, packs and bulk rates.' },
  { id: 'lays', name: "Lay's potato chips", category: 'snacks', image: pack('lays'), description: 'Your familiar potato-chip favourite. Enquire about flavours and available packs.' },
  { id: 'amul', name: 'Amul Taaza milk', category: 'grocery', image: pack('amul'), description: 'Packaged milk for everyday needs. Ask about pack sizes, availability and rates.' },
  { id: 'jim-jam', name: 'Britannia Jim Jam', category: 'biscuits', image: pack('jim-jam'), description: 'Cream and jam sandwich biscuits. Enquire about packs and wholesale quantities.' },
  { id: 'uncle-chipps', name: 'Uncle Chipps', category: 'snacks', image: pack('uncle-chipps'), description: 'Packaged potato chips for snack time. Ask about flavours, packs and bulk rates.' },
  { id: 'crax', name: 'Crax snacks', category: 'snacks', image: pack('crax'), description: 'Crunchy packaged snacks. Enquire about the available Crax range and pack sizes.' },
  { id: 'drinks', name: 'Soft drinks & beverages', category: 'beverages', image: asset('drinks'), description: 'Ask about drinks, water and bulk requirements.' },
  { id: 'cake', name: 'Cakes', category: 'bakery', image: asset('cake'), price: null, priceUnit: '', description: 'Contact us for available cakes, sizes and rates.' },
];
