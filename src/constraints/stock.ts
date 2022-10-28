//Perros Adultos y Cachorros
import zimpiAdultoCarne from "../assets/products/dogs/zimpi_perro_adulto_carne.png";
import cariAmiciCarneLeche from "../assets/products/dogs/cariamici_carneleche.png";
import cariAmiciCarnePolloVegetales from "../assets/products/dogs/cariamici_carnepollovegetales.png";
import colegaCarnePolloCerdo from "../assets/products/dogs/colega_adulto_carnepollocerdo.png";
import compinchesPerroCarne from "../assets/products/dogs/compinche_perro_carne.png";
import xtremeDogPerroAdulto from "../assets/products/dogs/extremedog_perro_adulto.png";
import fiacasPerroAdulto from "../assets/products/dogs/fiacas_adultos.png";
import ganacanAdultoCarne from "../assets/products/dogs/ganacan_adulto_carne.png";
import ganacanAdultoMix from "../assets/products/dogs/ganacan_adulto_mix.png";
import khanAdultoRazaGrandeMediana from "../assets/products/dogs/khan_perro_adulto_razagrandemediana.png";
import khanAdultoRazaPequeña from "../assets/products/dogs/khan_perro_adulto_razapequena.png";
import magnificosPerroCarne from "../assets/products/dogs/magnifico_perros_carne.png";
import odwallaAdultos from "../assets/products/dogs/odwalla_adultos.png";

//Perros Adultos y Cachorros
import khanCachorro from "../assets/products/dogs/khan_perro_cachorro.png";
import odwallaCachorros from "../assets/products/dogs/odwalla_cachorros.png";
import ganacanCachorroLecheCarne from "../assets/products/dogs/ganacan_cachorro_lechecarne.png";

//Gatos Adultos y Cachorros
import compinchesGatoPescado from "../assets/products/cats/compinche_gato_pescado.png";
import nineLivesSalmonAtun from "../assets/products/cats/9lives_salmon_atun.png";
import cariAmiciCarnePolloAtun from "../assets/products/cats/cariamici_carnepolloatun.png";
import cariAmiciPescados from "../assets/products/cats/cariamici_pescados.png";
import fishyPescado from "../assets/products/cats/fishy_pescado.png";
import zimpiPescado from "../assets/products/cats/zimpi_gatos_pescado.png";

//Aves

//Recrias

const templateMessage =
	"https://wa.me/5493704279085?text=¡Hola!%20Quiero%20saber%20el%20precio%20y%20disponibilidad%20de%20stock%20de%20";

export const stock = {
	dogsProducts: [
		{
			name: "Cari Amici",
			imgSrc: cariAmiciCarneLeche.src,
			description:
				"Nutrición completa balanceada para que su animal de compañía crezca sano y tenga la mejor calidad de vida, mientras disfruta de alimentos deliciosos adaptados a su paladar.",
			variant: "Carne y Leche",
			presentations: [
				{
					for: "Perros Cachorros",
					weight: "1.5 kg",
					href: `${templateMessage}Cari%20Amici%20Cachorros%20Carne%20y%20Leche%20de%201.5kg,%20por%20favor.%20Gracias!`,
				},
				{
					for: "Perros Cachorros",
					weight: "3 kg",
					href: `${templateMessage}Cari%20Amici%20Cachorros%20Carne%20y%20Leche%20de%203kg,%20por%20favor.%20Gracias!`,
				},
				{
					for: "Perros Cachorros",
					weight: "15 kg",
					href: `${templateMessage}Cari%20Amici%20Cachorros%20Carne%20y%20Leche%20de%2015kg,%20por%20favor.%20Gracias!`,
				},
				{
					for: "Perros Cachorros",
					weight: "20 kg",
					href: `${templateMessage}Cari%20Amici%20Cachorros%20Carne%20y%20Leche%20de%2020kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Cari Amici",
			description:
				"Nutrición completa balanceada para que su animal de compañía crezca sano y tenga la mejor calidad de vida, mientras disfruta de alimentos deliciosos adaptados a su paladar.",
			imgSrc: cariAmiciCarnePolloVegetales.src,
			variant: "Carne, Pollo y Vegetales",
			presentations: [
				{
					for: "Perros Adultos",
					weight: "15 kg",
					href: `${templateMessage}Cari%20Amici%20Cachorros%20Carne,%20pollo%20y%20vegetales%20de%2015kg,%20por%20favor.%20Gracias!`,
				},
				{
					for: "Perros Adultos",
					weight: "20 kg",
					href: `${templateMessage}Cari%20Amici%20Cachorros%20Carne,%20pollo%20y%20vegetales%20de%2020kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Odwalla",
			description:
				"Odwalla Cachorros es un alimento premium completo y balanceado, formulado por especialistas en nutrición animal para proporcionar a los cachorros de todas las razas todos los nutrientes necesarios para un crecimiento saludable.",
			imgSrc: odwallaCachorros.src,
			presentations: [
				{
					for: "Perros Cachorros",
					weight: "8 kg",
					href: `${templateMessage}Odwalla%20Cachorros%20de%208kg,%20por%20favor.%20Gracias!`,
				},
				{
					for: "Perros Cachorros",
					weight: "22 kg",
					href: `${templateMessage}Odwalla%20Cachorros%20de%2022kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Odwalla",
			description:
				"ODWALLA ADULTOS es un alimento premium completo y balanceado, formulado por especialistas en nutrición animal para proporcionar a los perros adultos de todas las razas todos los nutrientes necesarios, para favorecer una óptima calidad de vida en perros con actividad normal.",
			imgSrc: odwallaAdultos.src,
			presentations: [
				{
					for: "Perros Adultos",
					weight: "22 kg",
					href: `${templateMessage}Odwalla%20Adultos%20de%2022kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Zimpi",
			description:
				"ZIMPI PERROS SABOR CARNE es un alimento balanceado completo que cubre todos los requerimientos nutricionales de un perro adulto en mantenimiento, de cualquier raza o tamaño corporal.",
			imgSrc: zimpiAdultoCarne.src,
			variant: "Carne",
			presentations: [
				{
					for: "Perros Adultos",
					weight: "15 kg",
					href: `${templateMessage}Zimpi%20Perros%20Adultos%20sabor%20carne%20de%2015kg,%20por%20favor.%20Gracias!`,
				},
				{
					for: "Perros Adultos",
					weight: "25 kg",
					href: `${templateMessage}Zimpi%20Perros%20Adultos%20sabor%20carne%20de%2025kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Ganacan",
			description:
				"Proteínas de alta digestibilidad, con proteínas que aportan todos los aminoácidos esenciales para la buena salud del perro y de gran asimilación digestiva para una mejor conformación fecal.",
			imgSrc: ganacanAdultoCarne.src,
			variant: "Carne",
			presentations: [
				{
					for: "Perros Adultos",
					weight: "22 kg",
					href: `${templateMessage}Ganacan%20Perros%20Adultos%20sabor%20carne%20de%2022kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Ganacan",
			description:
				"Proteínas de alta digestibilidad, con proteínas que aportan todos los aminoácidos esenciales para la buena salud del perro y de gran asimilación digestiva para una mejor conformación fecal.",
			imgSrc: ganacanAdultoMix.src,
			variant: "Mix: Carne, Higado y Pollo",
			presentations: [
				{
					for: "Perros Adultos",
					weight: "22 kg",
					href: `${templateMessage}Ganacan%20Perros%20Adultos%20sabor%20MIX%20de%2022kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Ganacan",
			description:
				"Defensas naturales fortalecidas, con multivitaminas, minerales y ácidos grasos esenciales que ayudan a reforzar al sistema inmune de los cachorros y contribuyen con su crecimiento saludable.",
			imgSrc: ganacanCachorroLecheCarne.src,
			variant: "Leche y Carne",
			presentations: [
				{
					for: "Perros Cachorros",
					weight: "22 kg",
					href: `${templateMessage}Ganacan%20Perros%20Cachorros%20sabor%20leche%20y%20carne%20de%2022kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Magníficos",
			description:
				"Alimento balanceado completo extrusado formulado para cumplir con los requerimientos nutricionales de perros adultos",
			imgSrc: magnificosPerroCarne.src,
			variant: "Carne",
			presentations: [
				{
					for: "Perros Adultos",
					weight: "18 kg",
					href: `${templateMessage}Magníficos%20Perros%20Adultos%20sabor%20carne%20de%2018kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Compinches",
			description:
				"COMPINCHES PERROS SABOR CARNE es un alimento balanceado completo que cubre todos los requerimientos nutricionales de un perro adulto en mantenimiento, de cualquier raza o tamaño corporal.",
			imgSrc: compinchesPerroCarne.src,
			variant: "Carne",
			presentations: [
				{
					for: "Perros Adultos",
					weight: "20 kg",
					href: `${templateMessage}Compinches%20Perros%20Adultos%20sabor%20carne%20de%2020kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Khan",
			description: "Alimento Premium con más Proteína.",
			imgSrc: khanAdultoRazaGrandeMediana.src,
			variant: "Carne y Pollo",
			presentations: [
				{
					for: "Perros Adultos Razas Grandes y Medianas",
					weight: "20 kg",
					href: `${templateMessage}Khan%20Perros%20Adultos%20razas%20medianas%20y%20grandes,%20sabor%20carne%20y%20pollo%20de%2020kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Khan",
			description: "Alimento Premium con más Proteína.",
			imgSrc: khanAdultoRazaPequeña.src,
			variant: "Carne y Pollo",
			presentations: [
				{
					for: "Perros Adultos Razas Pequeñas",
					weight: "10 kg",
					href: `${templateMessage}Khan%20Perros%20Adultos%20razas%20pequeñas,%20sabor%20carne%20y%20pollo%20de%2010kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Khan",
			description: "Alimento Premium con más Proteína.",
			imgSrc: khanCachorro.src,
			variant: "Carne y Pollo",
			presentations: [
				{
					for: "Perros Cachorros",
					weight: "10 kg",
					href: `${templateMessage}Khan%20Perros%20Cachorros%20sabor%20carne%20y%20pollo%20de%2010kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Extreme Dog",
			description: "Alimento Premium con más Proteína.",
			imgSrc: xtremeDogPerroAdulto.src,
			variant: "Carne y Pollo",
			presentations: [
				{
					for: "Perros Adultos",
					weight: "20 kg",
					href: `${templateMessage}Xtreme%20Dog%20Perros%20Adultos%20sabor%20carne%20y%20pollo%20de%2020kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Colega",
			description:
				"Alimento balanceado para perros adultos con proteínas y vitaminas.",
			imgSrc: colegaCarnePolloCerdo.src,
			variant: "Carne, Pollo y Cerdo",
			presentations: [
				{
					for: "Perros Adultos",
					weight: "15 kg",
					href: `${templateMessage}Colega%20Perros%20Adultos%20sabor%20carne,%20pollo%20y%20cerdo%20de%2015kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Fiacas",
			description:
				"Alimento balanceado para perros adultos con proteínas y vitaminas.",
			imgSrc: fiacasPerroAdulto.src,
			variant: "Carne",
			presentations: [
				{
					for: "Perros Adultos",
					weight: "15 kg",
					href: `${templateMessage}Fiacas%20Perros%20Adultos%20sabor%20carne%20de%2015kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
	],

	catsProducts: [
		{
			name: "9 Lives - Delicias",
			description:
				"9LIVES Delicias cuida la salud de tu gato, mientras él disfruta sus sabores preferidos ya que ha sido desarrollada con proteínas y minerales que cuidan y protegen el tracto urinario de tu gato, ayudando a prevenir la formación de cálculos.",
			imgSrc: nineLivesSalmonAtun.src,
			variant: "Salmón y Atún",
			presentations: [
				{
					for: "Gatitos",
					weight: "8 kg",
					href: `${templateMessage}9Lives%20Gatitos%20sabor%20salmón%20y%20atún%20de%208kg,%20por%20favor.%20Gracias!`,
				},
				{
					for: "Gatos",
					weight: "15 kg",
					href: `${templateMessage}9Lives%20Gatos%20sabor%20salmón%20y%20atún%20de%2015kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Cari Amici",
			description:
				"Nutrición completa balanceada para que su animal de compañía crezca sano y tenga la mejor calidad de vida, mientras disfruta de alimentos deliciosos adaptados a su paladar.",
			imgSrc: cariAmiciPescados.src,
			variant: "Pescados",
			presentations: [
				{
					for: "Gatos",
					weight: "1 kg",
					href: `${templateMessage}Cari%20Amici%20Gatos%20Pescado%20de%201kg,%20por%20favor.%20Gracias!`,
				},
				{
					for: "Gatos",
					weight: "10 kg",
					href: `${templateMessage}Cari%20Amici%20Gatos%20Pescado%20de%2010kg,%20por%20favor.%20Gracias!`,
				},
				{
					for: "Gatos",
					weight: "15 kg",
					href: `${templateMessage}Cari%20Amici%20Gatos%20Pescado%20de%2015kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Cari Amici",
			description:
				"Nutrición completa balanceada para que su animal de compañía crezca sano y tenga la mejor calidad de vida, mientras disfruta de alimentos deliciosos adaptados a su paladar.",
			imgSrc: cariAmiciCarnePolloAtun.src,
			variant: "Carne, Pollo y Atún",
			presentations: [
				{
					for: "Gatos",
					weight: "1 kg",
					href: `${templateMessage}Cari%20Amici%20Gatos%20Carne,%20pollo%20y%20atún%20de%201kg,%20por%20favor.%20Gracias!`,
				},
				{
					for: "Gatos",
					weight: "10 kg",
					href: `${templateMessage}Cari%20Amici%20Gatos%20Carne,%20pollo%20y%20atún%20de%2010kg,%20por%20favor.%20Gracias!`,
				},
				{
					for: "Gatos",
					weight: "15 kg",
					href: `${templateMessage}Cari%20Amici%20Gatos%20Carne,%20pollo%20y%20atún%20de%2015kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Zimpi",
			description:
				"ZIMPI GATOS ADULTOS, es un alimento completo y balanceado que cubre todos los requerimientos nutricionales de un gato adulto en mantenimiento de cualquier raza o tamaño corporal. CUIDADO URINARIO: ayuda a prevenir la formación de cálculos. Con TAURINA: visión y corazón saludables.",
			imgSrc: zimpiPescado.src,
			variant: "Pescado",
			presentations: [
				{
					for: "Gatos",
					weight: "10 kg",
					href: `${templateMessage}Zimpi%20Gatos%20sabor%20carne%20de%2010kg,%20por%20favor.%20Gracias!`,
				},
				{
					for: "Gatos",
					weight: "15 kg",
					href: `${templateMessage}Zimpi%20Gatos%20sabor%20carne%20de%2015kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Fishy",
			description:
				"CUIDADO URINARIO: ayuda a prevenir la formación de cálculos. Con TAURINA: visión y corazón saludables. 100 % completo y balanceado.",
			imgSrc: fishyPescado.src,
			variant: "Pescado",
			presentations: [
				{
					for: "Gatos",
					weight: "8 kg",
					href: `${templateMessage}Fishy%20Gatos%20sabor%20Pescado%20de%208kg,%20por%20favor.%20Gracias!`,
				},
				{
					for: "Gatos",
					weight: "15 kg",
					href: `${templateMessage}Fishy%20Gatos%20sabor%20Pescado%20de%2015kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
		{
			name: "Compinches",
			description:
				"COMPINCHES GATOS SABOR PESCADO, es un alimento completo y balanceado que cubre todos los requerimientos nutricionales de un gato adulto en mantenimiento, de cualquier raza o tamaño corporal. SALUD URINARIA: ayuda a prevenir la formación de cálculos en las vías urinarias  bajas. Con TAURINA: visión y corazón saludables.",
			imgSrc: compinchesGatoPescado.src,
			variant: "Pescado",
			presentations: [
				{
					for: "Gatos",
					weight: "10 kg",
					href: `${templateMessage}Compinches%20Gatos%20sabor%20Pescado%20de%2010kg,%20por%20favor.%20Gracias!`,
				},
				{
					for: "Gatos",
					weight: "20 kg",
					href: `${templateMessage}Compinches%20Gatos%20sabor%20Pescado%20de%2020kg,%20por%20favor.%20Gracias!`,
				},
			],
		},
	],

	birdsProducts: [{}],

	otherProducts: [{}],
};
