let mapleader = "\<space>"
set noshowmode
set cmdheight=1

" Load my sweet plugins
call plug#begin('~/.config/nvim/plugged')
source ~/.config/nvim/plugins.vim
call plug#end()


""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
"	Color, Syntax and fonts
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Use Unix line ending and UTF-8 encoding
set ffs=unix,dos,mac
set encoding=utf-8
set fileencoding=utf-8

" Syntax & colorscheme
syntax enable
set termguicolors
colorscheme base16-onedark

" No backups
set nobackup
set nowb
set noswapfile

" Default tabs and indentation settings
set expandtab
set tabstop=4
set shiftwidth=4
set softtabstop=4
set autoindent
set cursorline
set nowrap

" set line numbers
set number
set hidden

" search settings
set incsearch
set ignorecase
set smartcase

" Copypasta for real
set clipboard+=unnamedplus

" Always clear trailling white spaces
autocmd BufWritePre * %s/\s\+$//e


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
"   Bindings
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Open NERDTree with CTRL-n
map <C-n> :NERDTreeToggle<CR><Paste>

" Space bindings
nmap <leader>s :w<cr>
nmap <leader>z :BufExplorerHorizontalSplit<cr>


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
"   Plugins config
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" NERDCommenter
let g:NERDSpaceDelims = 1
let g:NERDCompactSexyComs = 1

" Prevent CTRL-P to search in those directories
let g:ctrlp_custom_ignore = 'node_modules\|DS_Store\|git'
let g:ctrlp_use_caching = 0
if executable('ag')
    set grepprg=ag\ --nogroup\ --nocolor

    let g:ctrlp_user_command = 'ag %s -l --nocolor -g ""'
else
    let g:ctrlp_user_command = ['.git', 'cd %s && git ls-files . -co --exclude-standard', 'find %s -type f']
    let g:ctrlp_prompt_mappings = {
                \ 'AcceptSelection("e")': ['<space>', '<cr>', '<2-LeftMouse>'],
                \ }
endif

" Dont use YouCompleteMe for those filetypes
let g:ycm_filetype_blacklist = {
      \ 'python': 1,
      \}
