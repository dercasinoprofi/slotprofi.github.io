const config = {
    baseURL: "https://google.com",
    siteName: "Slots Profi",
    title: "Kostenlose Casino Slots spielen",
    apiUrl: "http://localhost:3002",
    slotsUrl: 'http://localhost:3002/slots',
    slotUrl: 'http://localhost:3002/slot',
    metaCharset: 'utf-8',
    meta: {
        htmlLang: "de",
        title: "Spiele kostenlose Slots | SlotProfi.com",
        description: "Beim Slots Profi findest du alle kostenlosen Casino Slots online zum Spielen mit Spielgeld. Teste deine Slot Maschine bevor du mit Echtgeld zockst.",
        keywords: "online, casino, slots, bonus",
    },
    slots: {
        numberOfSlots: 20,
        limit: 10,
        maximalPaginationSize: 100
    },
    provider: [{
        key: 'pragmaticplay',
        name: 'Pragmatic Play',
        logo: 'pragmaticplay.jpg',
        subline: 'Slots von Pragmatic Play kostenlos spielen',
        publish: true,
        meta: {
            title: 'Pragmatic Play Slots kostenlos spielen',
            metaDescription: 'Spiele kostenlose Slot Maschinen von Pragmatic Play. Kein Echtgeld notwendig. Testen Sie die Spiele bevor Sie sie im Casino spielen.'
        },
        seo: {
            seoText: 'Pragmatic Play ist ein Anbieter von Online Casino Slots, die in Malta ansässig und lizenziert sind. Das Unternehmen wurde 2015 gegründet und hat seinen Hauptsitz in Sliema. Die Spiele von Pragmatic Play sind in über 30 Sprachen verfügbar und können in über 80 Ländern gespielt werden. Das Unternehmen bietet über 150 spannende Casino-Spiele, darunter Slots, Tischspiele, Video-Poker und Live-Casino-Spiele. Die Spiele sind für alle Geräte optimiert, einschließlich Desktop, Tablet und Smartphone. Pragmatic Play hat sich schnell zu einem der führenden Anbieter von Online-Casino-Spielen entwickelt und bietet seinen Spielern eine unterhaltsame und spannende Spielerfahrung.'
        }
    }],
    seo: {
        seoText: `
        <h1 class="text-center"><span class="pageButtons">Kostenlose Casino Slots vom SlotsProfi</span></h1>

        <p class="pt-2">Slot Automaten sind das beliebteste Casinospiel der Welt, und dafür gibt es einen guten Grund. Sie sind einfach zu spielen, sie sind aufregend, und sie bieten die Chance auf große Gewinne.</p>

        <p>Aber was sind Online-Slots, und wie funktionieren sie?</p>
        
        <p>Online-Slots sind im Wesentlichen elektronische Versionen der traditionellen Slot Maschinen, die Sie in einem stationären Casino finden. Sie funktionieren auf genau dieselbe Weise, nur dass Sie keinen Hebel ziehen, sondern eine Taste drücken, um die Walzen zu drehen.</p>
        
        <p>Das Ziel des Spiels ist es, passende Symbole auf den Gewinnlinien aufzustellen. Die Anzahl der Gewinnlinien ist bei den verschiedenen Online-Spielautomaten unterschiedlich, aber je mehr Gewinnlinien es gibt, desto größer sind Ihre Gewinnchancen.</p>
        
        <p>Die meisten Online-Spielautomaten verfügen auch über besondere Funktionen wie Jokersymbole und Freispiele. Wild-Symbole können jedes andere Symbol ersetzen, d. h. sie können Ihnen helfen, eine Gewinnlinie zu vervollständigen. Freispiele sind genau das, wonach sie klingen - Sie dürfen die Walzen kostenlos drehen und können dabei manchmal echtes Geld gewinnen.</p>
        
        <p>Es gibt buchstäblich Tausende von verschiedenen Slot Games, aus denen Sie wählen können, also gibt es sicher einen, der perfekt für Sie ist. Und bei so vielen verschiedenen Themen gibt es für jeden einen Online-Slot.</p>
        
        <p>Worauf warten Sie also noch? Drehen Sie die Walzen und sehen Sie, ob Sie den Jackpot knacken können!</p>`

    },
    navigationLinks: [
        { name: 'Start', title: 'Online Slots', url: '/', publish: true },
        { name: 'Casinos', title: 'Casinos', url: '/online-casinos/', publish: false },
        { name: 'Bonus', title: 'Casino Bonus', url: '/casino-bonus/', publish: false },
        { name: 'Slots', title: 'Online Slots', url: '/slots/', publish: false },
        { name: 'Mobile', title: 'Mobile Casinos', url: '/mobile-casinos/', publish: false },
        { name: 'Paypal Casinos', title: 'Paypal Casino', url: '/paypal-casino/', publish: false },
        { name: 'Zahlungsmethoden', title: 'Casino Zahlungsmethoden', url: '/casino-zahlungsmoeglichkeiten/', publish: false },
        { name: 'Spielregeln', title: 'Casinos Spielregeln', url: '/casino-spielregeln/', publish: false },
        { name: 'Software', title: 'Casino Software', url: '/casino-software/', publish: false },
        { name: 'Ratgeber', title: 'Casino Ratgeber', url: '/casino-ratgeber/', publish: false },
        { name: 'News', title: 'Casino News', url: '/casino-news/', publish: false },
        { name: 'Gütesiegel', title: 'online casino betrugstest', url: '/online-casino-betrugstest/', publish: false },
    ],
    categories: [
        { name: 'Electronic', tag: 'electronic', title: 'Electronics', image: 'electronic.jpg', publish: true, metaDescription: 'Buy cheap Electronic here.' },


    ],
}

module.exports = config