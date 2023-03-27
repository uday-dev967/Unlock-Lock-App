import {useState} from 'react'
import {
  AppContainer,
  ContentContainer,
  ToggleButton,
  Para,
} from './styledComponents'

const Unlock = () => {
  const [isDeviceLocked, toggleLock] = useState(true)

  const onClickToggleButton = () => toggleLock(prevState => !prevState)
  return (
    <AppContainer>
      {isDeviceLocked ? (
        <ContentContainer>
          <img
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <Para>Your device is Locked</Para>
          <ToggleButton onClick={onClickToggleButton} type="button">
            UnLock
          </ToggleButton>
        </ContentContainer>
      ) : (
        <ContentContainer>
          <img
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <Para>Your device is Unlocked</Para>
          <ToggleButton onClick={onClickToggleButton} type="button">
            Lock
          </ToggleButton>
        </ContentContainer>
      )}
    </AppContainer>
  )
}

export default Unlock
