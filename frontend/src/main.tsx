import { fetchProducts } from './services/api.service';

console.log("=== Ambiente Lógico da Busca Indexada Iniciado ===");

// Função principal simples para testar a chamada da API isoladamente
async function init() {
  console.log("⏳ Buscando produtos da API Fakestore...");
  try {
    const products = await fetchProducts();
    console.log(`✅ Sucesso! ${products.length} produtos carregados na memória.`);
    console.log("Exemplo do primeiro produto capturado:", products[0]);
    
    // Futuro: Em breve, vamos "enviar" esses 'products' para dentro do nosso HashMap (Motor de indexação).
    
  } catch (err) {
    console.error("❌ Falha na inicialização conectando à API externa.", err);
  }
}

init();
