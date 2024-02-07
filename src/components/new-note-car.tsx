import { useState, useRef } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X, ArrowLeft } from 'lucide-react'

export function NewNoteCard() {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState<boolean>(true)

  const textNoteRef = useRef(null)

  function handleStartEditor() {
    setShouldShowOnboarding(!shouldShowOnboarding)
  }

  function handleSaveNote(event: React.FormEvent) {
    event.preventDefault()
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className='rounded-md flex flex-col overflow-hidden bg-slate-700 text-left p-5 gap-3 hover:ring-2 outline-none hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
        <span className='text-small font-medium text-slate-200'>
          adicionar nota
        </span>
        <p className='text-small leading-6 text-slate-400'>
          Grave uma nota em áudio que será convertida para texto automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className='inset-0 fixed bg-black/50' />
        <Dialog.Content className="fixed left-1/2 top-1/2 overflow-hidden rounded-md outline-none -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 flex flex-col">

          <Dialog.Close className='absolute right-0 top-0 p-1.5 bg-slate-800 text-slate-400 hover:text-slate-100'>
            <X className='size-5' />
          </Dialog.Close>
          <form onSubmit={handleSaveNote} className='flex flex-1 flex-col'>
            <div className='flex flex-1 flex-col gap-3 p-5'>
              <span className='flex gap-5 items-center text-small font-medium text-slate-200'>
                Adicionar Nota
                {!shouldShowOnboarding &&
                  <button onClick={handleStartEditor} className='flex items-center hover:underline'>
                    <ArrowLeft className='size-4' />
                    <span>voltar para inicio</span>
                  </button>
                }
              </span>

              {shouldShowOnboarding ? (
                <p className='text-small leading-6 text-slate-400'>
                  Comece <button className='text-lime-400 font-medium hover:underline'>gravando uma nota em áudio</button> ou se prefirir <button onClick={handleStartEditor} className='text-lime-400 font-medium hover:underline'> ultilize apenas texto.</button>
                </p>
              ) : (
                <>
                  <textarea
                    ref={textNoteRef}
                    autoFocus
                    className='text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none'
                  />
                </>
              )}
            </div>
            <button type="submit" className='w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500'>
              Salvar nota
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}