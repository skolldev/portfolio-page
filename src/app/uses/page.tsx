import { Card } from '@/components/Card'
import { ISection, Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

type AddField<T, K extends string, V> = T & { [P in K]: V }

function ToolsSection({
  children,
  ...props
}: AddField<ISection, 'space', string | undefined>) {
  return (
    <Section {...props}>
      <ul role="list" className={props.space}>
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children?: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      {children ? <Card.Description>{children}</Card.Description> : null}
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Hardware and Software I use!"
      intro="Sometimes people are interested in what hardware I use, both for work and personal stuff. So I made a list!"
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation" space="space-y-8">
          <Tool title="14” MacBook Pro, M2 Pro, 32GB RAM (2023)">
            I just love the M chip, it’s so fast for development workloads and
            stays silent pretty much all the time.
          </Tool>
          <Tool title="Logitech MX Keys Mini">
            I tried quite a few keyboards for work, but never really found one I
            liked. This one is small, connects quick, has good battery, typing
            feels good and it’s silent so I don’t annoy my coworkers when in the
            office.
          </Tool>
          <Tool title="Logitech MX Master 3">
            Well.. It’s a mouse. Good battery, connects quickly. Does mouse
            things. Recommend!
          </Tool>
          <Tool title="Fully Jarvis Standing Desk">
            I think they’ve been bought my HermanMiller, so maybe it’s a
            HermanMiller Jarvis now? Anyway - it’s got programmable heights and
            is pretty stable for the price. I got the 180x80 version, which is
            enough space for my desktop pc, two monitors, and my macbook.
          </Tool>
          <Tool title="Secretlab Titan">
            It’s a nice chair, the quality is better than its
            &ldquo;gamer&rdquo; looks would suggest.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools" space="space-y-8">
          <Tool title="VS Code" />
          <Tool title="Warp">
            A modern take on terminals built on rust. It’s essentially a
            terminal but with QOL features I always wished for - properly
            selecting things, copy/paste, easily save commands
          </Tool>
          <Tool title="Raycast">
            Probably the tool I miss the most on my Windows machine.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Desktop" space="space-y-4">
          <Tool title="Fractal Design North" />
          <Tool title="AMD Ryzen 5800X" />
          <Tool title="Thermalright Peerless Assassin 120 SE" />
          <Tool title="XFX Speedster MERC Radeon RX 7900 XT" />
          <Tool title="Gigabyte X570 Aorus Elite" />
          <Tool title="4x Corsair Vengeance RGB 8GB" />
          <Tool title="Samsung 990 Pro 2TB" />
          <Tool title="Crucial MX500 2TB" />
          <Tool title="Corsair RM850x" />
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
