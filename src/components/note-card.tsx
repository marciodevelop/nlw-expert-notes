

export function NoteCard() {
  return (
    <button className='text-left relative rounded-md overflow-hidden bg-slate-800 p-5 space-y-3 hover:ring-2 outline-none hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
      <span className='text-small font-medium text-slate-200'>
        há 2 dias
      </span>
      <p className='text-small leading-6 text-slate-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quisquam deleniti necessitatibus, ad quia, ut exercitationem ipsam perferendis tempore repudiandae commodi ea tenetur accusamus pariatur soluta porro illo, itaque blanditiis.
      </p>
      <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
    </button>
  )
}