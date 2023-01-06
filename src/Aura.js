import {useToast, ToastContainer} from 'toast-aura/lib'

const SuccessSettings = {
  title: 'Success',
  mode: 'success',
  description: 'success toast',
  animationType: 'move',
}
const ErrorSettings = {
    title: 'Error',
    mode: 'error',
    description: 'error toast',
    animationType: 'scale',
}
const WarningSettings = {
    title: 'Warning',
    mode: 'warning',
    description: 'Warning toast',
    animationType: 'scale',
}
const InfoSettings = {
    title: 'Info',
    mode: 'info',
    description: 'Info toast',
    animationType: 'scale',
    backgroundColor:'gray',
}


const ContainerSettings = {
  autoClose: true,
  autoCloseTime: 3000,
  position: 'topLeft',
  margin: 'small',
}

export const Aura = () => {

  const { toastRef, addToast } = useToast()

  const addSuccess = () => addToast({
    ...SuccessSettings })
  const addWarning = () => addToast({
    ...WarningSettings })
  const addInfo = () => addToast({
    ...InfoSettings })
  const addError = () => addToast({
    ...ErrorSettings })

  return (
    <>
      <button onClick={addSuccess}> Test Success Toast</button>
      <button onClick={addWarning}> Test Warning Toast</button>
      <button onClick={addInfo}> Test Info(w bgColor) Toast</button>
      <button onClick={addError}> Test Error Toast</button>
      <ToastContainer ref={toastRef} {...ContainerSettings} />
    </>
  )
}