import { useTrail, animated as a } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import React from 'react'

const Trail: React.FC<{}> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    delay: 150,
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(2px)',
  })

  return (
    <div ref={ref}>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} style={{ ...style }}>
          {items[index]}
        </a.div>
      ))}
    </div>
  )
}

export default Trail
