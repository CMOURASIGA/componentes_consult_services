/* RT-018 - navegacao por abas acessivel, sem remocao de campos do DOM. */
(function(global){
  'use strict';
  function initConsultTabs(root){
    if(!root || root.dataset.csTabsReady === 'true') return;
    const list=root.querySelector('[role="tablist"]');
    if(!list) return;
    const tabs=Array.from(list.querySelectorAll('[role="tab"]'));
    if(!tabs.length) return;
    const entries=tabs.map(tab=>{
      const id=tab.getAttribute('aria-controls');
      const panel=id?root.querySelector('#'+CSS.escape(id)):null;
      if(!panel || panel.getAttribute('aria-labelledby')!==tab.id) throw Error('RT-018: relacionar cada tab ao seu tabpanel com IDs unicos.');
      return {tab,panel};
    });
    function activate(index,focus){
      entries.forEach(({tab,panel},i)=>{
        const active=i===index;
        tab.setAttribute('aria-selected',String(active));
        tab.tabIndex=active?0:-1;
        panel.hidden=!active;
      });
      if(focus) entries[index].tab.focus();
      root.dispatchEvent(new CustomEvent('consulttabs:change',{detail:{id:entries[index].tab.id},bubbles:true}));
    }
    list.addEventListener('click',e=>{
      const tab=e.target.closest('[role="tab"]');
      const index=entries.findIndex(x=>x.tab===tab);
      if(index>=0)activate(index,false);
    });
    list.addEventListener('keydown',e=>{
      const index=entries.findIndex(x=>x.tab===document.activeElement);
      if(index<0)return;
      let next;
      if(e.key==='ArrowRight')next=(index+1)%entries.length;
      else if(e.key==='ArrowLeft')next=(index+entries.length-1)%entries.length;
      else if(e.key==='Home')next=0;
      else if(e.key==='End')next=entries.length-1;
      else return;
      e.preventDefault();activate(next,true);
    });
    const initial=Math.max(0,entries.findIndex(x=>x.tab.getAttribute('aria-selected')==='true'));
    root.dataset.csTabsReady='true';activate(initial,false);
    return {activateById(id){const i=entries.findIndex(x=>x.tab.id===id);if(i>=0)activate(i,false);}};
  }
  global.initConsultTabs=initConsultTabs;
  document.addEventListener('DOMContentLoaded',()=>document.querySelectorAll('[data-consult-tabs]').forEach(initConsultTabs));
})(window);
