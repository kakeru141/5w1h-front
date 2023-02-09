export class TabClass {
    private tabsMenusElememt
    private focusingTabIndex
	private currentTabIndex
    constructor(tabsMenusElememt:HTMLDivElement,) {
        this.tabsMenusElememt = tabsMenusElememt
        this.focusingTabIndex = 0
		this.currentTabIndex = 0
	}
    keyboardOperable(e: Event & {key: string}) {
        const focusingElement = document.activeElement
        const lastTabIndex = this.tabsMenusElememt.children.length - 1
        const pushedKey = e.key
        const tabElements = <HTMLButtonElement[]>[...this.tabsMenusElememt.children]
		

        if (tabElements.some((elem) => elem === focusingElement)) {
			e.preventDefault();
			if (this.focusingTabIndex === lastTabIndex) {
				if (pushedKey === 'ArrowLeft') {
					this.focusingTabIndex--;
					tabElements[this.focusingTabIndex].focus();
				} else if (pushedKey === 'ArrowRight') {
					this.focusingTabIndex = 0;
					tabElements[this.focusingTabIndex].focus();
				} else if (pushedKey === 'Tab') {
					tabElements[this.focusingTabIndex].blur();
				}
			} else if (this.focusingTabIndex === 0) {
				if (pushedKey === 'ArrowLeft') {
					this.focusingTabIndex = lastTabIndex;
					tabElements[this.focusingTabIndex].focus();
				} else if (pushedKey === 'ArrowRight' || pushedKey === 'Tab') {
					this.focusingTabIndex++;
					tabElements[this.focusingTabIndex].focus();
				}
			} else {
				if (pushedKey === 'ArrowLeft') {
					this.focusingTabIndex--;
					tabElements[this.focusingTabIndex].focus();
				} else if (pushedKey === 'ArrowRight' || pushedKey === 'Tab') {
					this.focusingTabIndex++;
					tabElements[this.focusingTabIndex].focus();
				}
			}

			if (pushedKey === 'ArrowUp' || pushedKey === 'ArrowDown') {
				tabElements[this.focusingTabIndex].blur();
			}else if(pushedKey === ' ' || pushedKey === 'Enter'){
				this.currentTabIndex = this.focusingTabIndex
			}
		} else {
			this.focusingTabIndex = 0;
		}
		console.log('focus:',this.focusingTabIndex)
		console.log('current:',this.currentTabIndex)
    }
	currentTabIndexReturn() {
		return this.currentTabIndex
	}
	tabClick( index: number) {
		this.focusingTabIndex = index
		this.currentTabIndex = index
	}
}
