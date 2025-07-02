import productos from '../../data/productos.json';

export async function GET() {
    return new Response(JSON.stringify(productos), {
        headers: {
        'Content-Type': 'application/json',
        },
    });
}
