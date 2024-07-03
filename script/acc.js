let accordionClassName = 'acc';
const Parent = document.querySelector(".main>.innerbox>.bottom");

//아코디언
class Accordion {
	constructor(parent,className) {
		this.container = document.createElement('div');
		this.container.classList.add(className);
		this.buttons = [];
		this.contents = [];
		parent.appendChild(this.container);
	}
	clear() {
		//클리어
		for(let i=0;i<this.buttons.length;i++) {
			this.buttons[i].classList.remove('active');
			this.contents[i].classList.remove('active');
		}
	}
	// 클릭 시
	fold(button,content) {
		let contains = button.classList.contains('active');
		this.clear();
		//액티브 추가
		if (!contains) {
			button.classList.add('active');
			content.classList.add('active');
		}
	}
	addItem(title,content) {
		//버튼,콘텐트 생성
		let newTitle = document.createElement('div');
		let newContent = document.createElement('div');
		//버튼 콘텐트 내용물 초기화
		newTitle.innerText = title;
		newContent.innerText = content;
		//온클릭
		newTitle.addEventListener('click',()=>{
			this.fold(newTitle,newContent);
		})
		//클래스 지정
		newTitle.classList.add('button');
		newContent.classList.add('content');
		//어펜드
		this.container.appendChild(newTitle);
		this.container.appendChild(newContent);
		//배열에 추가
		this.buttons.push(newTitle);
		this.contents.push(newContent);
	}
}

//탭 컨테이너
class TabContainer {
	constructor (parent,className) {
		this.container = document.createElement('div');
		this.tabs = [];
		this.accs = [];
		this.container.classList.add(className);
		parent.appendChild(this.container);
	}
	clear() {
		// 클리어
		for(let i = 0;i<this.tabs.length;i++) {
			this.tabs[i].classList.remove('active');
			this.accs[i].container.classList.remove('active');
			this.accs[i].clear();
		}
	}
	buttonClick(button,acc) {
		// contains
		let contains = button.classList.contains('active');
		//클리어
		this.clear()
		// set Active
		if (!contains) {
			button.classList.add('active');
			acc.container.classList.add('active');
		}
	}
	buttonClickByIndex(num) {
		if (num>=0&&num<this.tabs.length) {
			this.buttonClick(this.tabs[num],this.accs[num]);
		}
	}
	addAccordion(title,acc) {
		//탭버튼 생성
		let newTab = document.createElement('div');
		newTab.innerText = title;
		newTab.classList.add('tab');
		newTab.addEventListener('click',()=>{this.buttonClick(newTab,acc);});
		//콘테이너에 탭 html삽입
		this.container.appendChild(newTab);
		//배열에 추가
		this.tabs.push(newTab);
		this.accs.push(acc);
	}
}

// 아코디언 초기화함수
function initAccordions(accordions) {
	//피자 주문하기
	let ac = new Accordion(Parent,accordionClassName);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 지원기기인데 온라인 결제가 안돼요.`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 오프라인 온라인 결제가능하나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 로 할부 결제가 가능한가요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`결제하기 화면에 Apple Pay 버튼이 보이지 않아, Apple Pay 로 결제할 수 없습니다.`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	accordions.push(ac);
	//
	ac = new Accordion(Parent,accordionClassName);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	accordions.push(ac);
	//
	ac = new Accordion(Parent,accordionClassName);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	accordions.push(ac);
	//
	ac = new Accordion(Parent,accordionClassName);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	accordions.push(ac);
	//
	ac = new Accordion(Parent,accordionClassName);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	accordions.push(ac);
	//
	ac = new Accordion(Parent,accordionClassName);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	accordions.push(ac);
	//
	ac = new Accordion(Parent,accordionClassName);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	accordions.push(ac);
	//
	ac = new Accordion(Parent,accordionClassName);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	ac.addItem(
		`Apple Pay 적용가능한 할인이 있나요?`,
		`Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.
		애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.
		카드사 포인트 복합결제는 결제수단을 변경해주세요.`
	);
	accordions.push(ac);
	//
}

//탭 내용물 초기화
function modifyTabs(tab,accordions) {
	// 아코디언의 내용물을 탭에 삽입
	tab.addAccordion("피자 주문하기",accordions[0]);
	tab.addAccordion("주문확인",accordions[1]);
	tab.addAccordion("포장 주문",accordions[2]);
	tab.addAccordion("할인 쿠폰",accordions[3]);
	tab.addAccordion("상품권/도미노콘/선물",accordions[4]);
	tab.addAccordion("도미노페이/퀵오더",accordions[5]);
	tab.addAccordion("회원/로그인",accordions[6]);
	tab.addAccordion("기타",accordions[7]);
	tab.buttonClickByIndex(0);
}

// 전체초기화함수
function init() {
	let accordions = [];
	// 탭 초기화
	let tab = new TabContainer(Parent,'tabContainer');
	// 아코디언 초기화
	initAccordions(accordions);
	// 탭에 아코디언 추가
	modifyTabs(tab,accordions);
}

// 전체초기화 호출
init();