export default function Header() {
    return (
        <div className="relative overflow-hidden bg-white">
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                  Careers in M41k80 Technology
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-700">
                  Welcome to the M41k80 Technology job portal! Join us to become a part of one of the most great IT companies in your career. A team with a clear vision, strong work ethic, and a lot of passion to the work that we do every day.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    "https://img.freepik.com/foto-gratis/cierre-dientes-hombre-moreno-sonriendo_1187-5800.jpg?t=st=1727966844~exp=1727970444~hmac=8e6eb08872f08327bafa3bec8b5270c58a20f50e29a6dabbe4c6726ceebe47eb&w=1060",
                    "https://img.freepik.com/foto-gratis/apuesto-hombre-sonriente-confiado-manos-cruzadas-sobre-pecho_176420-18743.jpg?t=st=1727966875~exp=1727970475~hmac=fb09cca0f550f45557fbc47e75cb8e95abc0eea6f18e3789ba2d3013eceb8dee&w=740",
                    "https://img.freepik.com/foto-gratis/joven-hombre-guapo-camiseta-casual-sobre-fondo-azul-cara-feliz-sonriendo-brazos-cruzados-mirando-camara-persona-positiva_839833-12963.jpg?t=st=1727983288~exp=1727986888~hmac=9329093c64643d7ad85893be0ec32305bf02a0eeab7a8fee9e42257c2510c2b9&w=740",
                    "https://img.freepik.com/foto-gratis/hombre-arabe-pie-sobre-fondo-amarillo-cara-feliz-sonriendo-brazos-cruzados-mirando-camara-persona-positiva_839833-2195.jpg?t=st=1727983326~exp=1727986926~hmac=34b6a955087132c4319909c10300a33dd2b9f3dff89dd40ba731b1aa23314d8f&w=740",
                    "https://img.freepik.com/foto-gratis/joven-rubia-sueter-invierno-lana-apuntando-dedo-arriba-idea-exitosa-emocionado-feliz-numero_839833-2100.jpg?t=st=1727983419~exp=1727987019~hmac=1e9e21250e01cc46b699263c09aab0152af9a9b56497d80300ff494c7abe3e33&w=740",
                    "https://img.freepik.com/foto-gratis/hombre-hispano-cabello-gris-parado-sobre-fondo-azul-persona-fuerte-mostrando-musculo-brazo-confiado-orgulloso-poder_839833-1593.jpg?t=st=1727983452~exp=1727987052~hmac=5d728c89955bc35ee61aa33f8f638662a8c1cd03c29af1613cee6817f3a4f73a&w=740",
                  ].map((src, index) => (
                    <div key={index} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                      <img
                        src={src}
                        alt={`Team member ${index + 1}`}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  