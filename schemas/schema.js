import z from 'zod'



const divisasSchema = z.object({
    nombre: z.string().min(1).max(20),
    clasificacion: z.enum(['Tarjeta', 'Blue', 'Qatar', 'Oficial']),
    precio: z.number().positive(),
    tope: z.number().positive(),
    min: z.number().positive()
})

// --> Requiere todos los campos
export function validateDivisa(divisa) {
    return divisasSchema.parse(divisa)
}

// --> Valida los campos que le llegan
export function validateDivisaUpdate(divisa) {
    return divisasSchema.partial().parse(divisa)
}