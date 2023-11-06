import { KolButton } from '@public-ui/react'

interface Button {
  label: string
  buttonText: string
  onClick: () => void
}

export const Button = (props: Button) => {
  const { label, buttonText, onClick } = props

  return (
    <>
      <KolButton
        _label={label}
        _on={{
          onClick: onClick,
        }}
      >
        {buttonText}
      </KolButton>
    </>
  )
}
