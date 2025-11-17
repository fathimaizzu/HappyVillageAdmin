import React from 'react'
import Card from '../Card/AnimatedCard'

function Sree() {
  return (
    
        <section>
        <div className="container max-w-[95%] mx-auto mt-10 px-12 pr-16 xl:pr-16 2xl:pr-8 ">

          <div className="mb-10">
            <p className="text-center text-yellow-500 font-semibold text-xl">Our Services</p>
            <h2 className="text-black text-4xl font-bold text-center">CLEAN WORK SERVICES</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            linkText={card.linkText}
            linkUrl={card.linkUrl}
            className={card.className}
          />
        ))}
      </div>

        </div>
      </section>

  )
}

export default Sree