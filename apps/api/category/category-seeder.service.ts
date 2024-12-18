import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from '../../libs/entities/categories/category.entity';

@Injectable()
export class CategorySeederService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async seed() {
    const categories = [
      { name: 'Abogado/a' },
      { name: 'Actor/Actriz' },
      { name: 'Administrador/a de Empresas' },
      { name: 'Administrador/a de Tiendas' },
      { name: 'Agente de Seguros' },
      { name: 'Albañil' },
      { name: 'Analista Financiero/a' },
      { name: 'Arquitecto/a' },
      { name: 'Artista Visual' },
      { name: 'Asesor/a de Inversiones' },
      { name: 'Asesor/a de Marketing' },
      { name: 'Asistente Administrativo/a' },
      { name: 'Asistente de Aula' },
      { name: 'Astrónomo/a' },
      { name: 'Auditor/a' },
      { name: 'Barberías' },
      { name: 'Bartender' },
      { name: 'Bioquímico/a' },
      { name: 'Cafeterías' },
      { name: 'Cardiólogo' },
      { name: 'Carpintero/a' },
      { name: 'Chef' },
      { name: 'Científico/a (Químico/a, Físico/a, Biólogo/a)' },
      { name: 'Clínicas Dentales' },
      { name: 'Community Manager' },
      { name: 'Contador/a' },
      { name: 'Corredor/a de Bolsa' },
      { name: 'Cocinero/a' },
      { name: 'Dentista' },
      { name: 'Desarrollador/a de Software' },
      { name: 'Diseñador/a Gráfico/a' },
      { name: 'Docente Universitario/a' },
      { name: 'Economista' },
      { name: 'Educador/a de Párvulos' },
      { name: 'Electricista' },
      { name: 'Enfermero/a' },
      { name: 'Escritor/a' },
      { name: 'Estéticas' },
      { name: 'Farmacias' },
      { name: 'Ferreterías' },
      { name: 'Floristerías' },
      { name: 'Fonoaudiólogo/a' },
      { name: 'Fotógrafo/a' },
      { name: 'Fruterías' },
      { name: 'Gasfíter (Fontanero/a)' },
      { name: 'Gerente de Operaciones' },
      { name: 'Gestor/a de Fondos' },
      { name: 'Gimnasios' },
      { name: 'Ingeniero/a Agrónomo/a' },
      { name: 'Ingeniero/a Civil' },
      { name: 'Ingeniero/a Comercial' },
      { name: 'Ingeniero/a Eléctrico/a' },
      { name: 'Ingeniero/a Industrial' },
      { name: 'Ingeniero/a en Biotecnología' },
      { name: 'Ingeniero/a en Informática' },
      { name: 'Ingeniero/a en Minas' },
      { name: 'Inspector/a Educacional' },
      { name: 'Investigador/a' },
      { name: 'Jardinero/a' },
      { name: 'Kinesiólogo/a' },
      { name: 'Lavanderías' },
      { name: 'Librerías' },
      { name: 'Matemático/a' },
      { name: 'Mecánico/a Automotriz' },
      { name: 'Médico General' },
      { name: 'Neurólogo' },
      { name: 'Notario/a' },
      { name: 'Nutricionista' },
      { name: 'Oceanógrafo/a' },
      { name: 'Orientador/a Educativo' },
      { name: 'Panaderías' },
      { name: 'Pastelerías' },
      { name: 'Pediatra' },
      { name: 'Peluquerías' },
      { name: 'Peluquero/a' },
      { name: 'Periodista' },
      { name: 'Politólogo/a' },
      { name: 'Productor/a Audiovisual' },
      { name: 'Programador/a de Software' },
      { name: 'Psicólogo/a' },
      { name: 'Psicopedagogo/a' },
      { name: 'Recursos Humanos' },
      { name: 'Reclutador/a de Personal' },
      { name: 'Representante de Ventas' },
      { name: 'Restaurantes' },
      { name: 'Servicios de Electricidad' },
      { name: 'Servicios de Entrega a Domicilio' },
      { name: 'Servicios de Limpieza' },
      { name: 'Servicios de Transporte' },
      { name: 'Sociólogo/a' },
      { name: 'Spa y Bienestar' },
      { name: 'Supermercados' },
      { name: 'Tecnólogo Médico' },
      { name: 'Técnico en Climatización' },
      { name: 'Técnico en Enfermería' },
      { name: 'Tiendas de Calzado' },
      { name: 'Tiendas de Electrónica' },
      { name: 'Tiendas de Juguetes' },
      { name: 'Tiendas de Mascotas' },
      { name: 'Tiendas de Ropa' },
      { name: 'Traductor/a e Intérprete' },
      { name: 'Trabajador/a Social' },
      { name: 'Vendedor/a' },
      { name: 'Veterinario/a' },
      { name: 'Minimarket' },
      { name:'Botillería' },
      { name: 'Estudio de tatuajes' },
  ];

    for (const category of categories) {
      const exists = await this.categoryRepository.findOne({ where: { name: category.name } });
      if (!exists) {
        await this.categoryRepository.save(category);
      }
    }
  }
}
