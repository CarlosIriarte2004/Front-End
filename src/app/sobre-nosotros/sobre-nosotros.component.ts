import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sobre-nosotros',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './sobre-nosotros.component.html', 
  styleUrl: './sobre-nosotros.component.css'
})
export class SobreNosotrosComponent {
  historiaTitulo: string = 'Nuestra Historia';
  historiaContenido: string = `Salud Total Bolivia es una institución de atención médica integral que nace con el firme propósito de transformar la experiencia de los servicios de salud en nuestro país. Nos enfocamos en brindar una atención humanizada, segura y accesible para todos los bolivianos, incorporando tecnologías modernas que permitan la automatización y optimización de procesos clave como la gestión de citas, el seguimiento de historiales clínicos y la planificación del recurso humano.
  En un contexto donde los sistemas de salud enfrentan desafíos críticos como la fragmentación de la información, la saturación en la atención y la desorganización administrativa, Salud Total Bolivia surge como una respuesta innovadora, articulada y orientada al usuario. Nuestra propuesta combina excelencia técnica con responsabilidad social, garantizando que cada paciente reciba un servicio oportuno, digno y eficaz.
  Nos proyectamos como una organización líder en servicios médicos digitales, aliada con centros de salud públicos y privados, promoviendo una cultura de calidad, respeto, ética profesional y mejora continua. Creemos que la salud no es solo la ausencia de enfermedad, sino un derecho fundamental que debe garantizarse con compromiso, transparencia y vocación de servicio.`;

  misionTitulo: string = 'Nuestra Misión';
  misionContenido: string = `Brindar atención médica de excelencia, centrada en el paciente y fundamentada en valores éticos, humanos y profesionales. Proporcionar un servicio integral que articule la tecnología, la eficiencia operativa y la calidad médica, con el objetivo de mejorar la experiencia y los resultados en salud de nuestros usuarios.`;

  visionTitulo: string = 'Nuestra Visión';
  visionContenido: string = `Convertirnos en el sistema de salud digital de mayor impacto e innovación en Bolivia, reconocido a nivel nacional por transformar la gestión médica mediante soluciones tecnológicas de alto nivel, orientadas a la eficiencia, equidad y calidad del servicio.`;
}
