"use client";

import "./country-picker.css";

import { useEffect, useId, useRef, useState } from "react";

const countries = [
    ["SA", "+966", "Saudi Arabia", "السعودية"],
    ["AE", "+971", "United Arab Emirates", "الإمارات"],
    ["KW", "+965", "Kuwait", "الكويت"],
    ["QA", "+974", "Qatar", "قطر"],
    ["BH", "+973", "Bahrain", "البحرين"],
    ["OM", "+968", "Oman", "عُمان"],
    ["EG", "+20", "Egypt", "مصر"],
    ["US", "+1", "USA / Canada", "أمريكا / كندا"],
    ["GB", "+44", "United Kingdom", "المملكة المتحدة"],
    ["FR", "+33", "France", "فرنسا"],
    ["DE", "+49", "Germany", "ألمانيا"],
    ["IT", "+39", "Italy", "إيطاليا"],
    ["ES", "+34", "Spain", "إسبانيا"],
    ["AU", "+61", "Australia", "أستراليا"],
    ["IN", "+91", "India", "الهند"],
    ["CN", "+86", "China", "الصين"],
    ["JP", "+81", "Japan", "اليابان"],
    ["KR", "+82", "South Korea", "كوريا الجنوبية"],
    ["SG", "+65", "Singapore", "سنغافورة"],
    ["MY", "+60", "Malaysia", "ماليزيا"],
];

type Props = { value: string; onChange: (value: string) => void; arabic: boolean };

export default function CountryCodePicker({ value, onChange, arabic }: Props) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(0);
    const root = useRef<HTMLDivElement>(null);
    const trigger = useRef<HTMLButtonElement>(null);
    const search = useRef<HTMLInputElement>(null);
    const id = useId();
    const listId = `${id}-list`;
    const filtered = countries.filter(country => country.join(" ").toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()));
    const selected = countries.find(country => country[1] === value)!;

    useEffect(() => {
        if (!open) return;
        if (!window.matchMedia("(pointer: coarse)").matches) search.current?.focus();
        const outside = (event: PointerEvent) => {
            if (!root.current?.contains(event.target as Node)) setOpen(false);
        };
        document.addEventListener("pointerdown", outside);
        return () => document.removeEventListener("pointerdown", outside);
    }, [open]);

    useEffect(() => {
        if (open) document.getElementById(`${id}-option-${active}`)?.scrollIntoView({ block: "nearest" });
    }, [active, open, id]);

    const choose = (code: string) => {
        onChange(code);
        setOpen(false);
        trigger.current?.focus();
    };

    return <div className="country-picker" ref={root} onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
    }}>
        <input type="hidden" name="inp_9142" value={value} />
        <button ref={trigger} type="button" className="country-picker-trigger" aria-haspopup="listbox" aria-expanded={open} aria-controls={open ? listId : undefined}
            aria-label={`${arabic ? "رمز الدولة" : "Country code"}: ${selected[arabic ? 3 : 2]} ${value}`}
            onClick={() => { setQuery(""); setActive(0); setOpen(!open); }}
            onKeyDown={event => { if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); setQuery(""); setActive(0); setOpen(true); } }}>
            <span dir="ltr">{value}</span>
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.2" /></svg>
        </button>
        {open && <div className="country-picker-panel" dir={arabic ? "rtl" : "ltr"}>
            <div className="country-picker-search">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor"/><path d="m13 13 4 4" stroke="currentColor"/></svg>
                <input ref={search} type="search" role="combobox" autoComplete="off" value={query} aria-expanded="true" aria-controls={listId} aria-autocomplete="list"
                    aria-activedescendant={filtered.length ? `${id}-option-${active}` : undefined}
                    aria-label={arabic ? "ابحث عن دولة أو رمز" : "Search country or code"} placeholder={arabic ? "ابحث عن الدولة أو الرمز…" : "Search country or code…"}
                    onChange={event => { setQuery(event.target.value); setActive(0); }}
                    onKeyDown={event => {
                        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                            event.preventDefault();
                            setActive(index => filtered.length ? (index + (event.key === "ArrowDown" ? 1 : -1) + filtered.length) % filtered.length : 0);
                        } else if (event.key === "Enter") {
                            event.preventDefault();
                            if (filtered[active]) choose(filtered[active][1]);
                        } else if (event.key === "Escape") {
                            event.preventDefault(); setOpen(false); trigger.current?.focus();
                        }
                    }} />
            </div>
            <div id={listId} role="listbox" aria-label={arabic ? "الدول" : "Countries"} className="country-picker-options">
                {filtered.map(([iso, code, en, ar], index) => <div key={iso} id={`${id}-option-${index}`} role="option" aria-selected={code === value}
                    className={`country-picker-option ${index === active ? "is-active" : ""}`} onPointerMove={() => setActive(index)} onMouseDown={event => event.preventDefault()} onClick={() => choose(code)}>
                    <span className="country-picker-name">{arabic ? ar : en}</span>
                    <span className="country-picker-code" dir="ltr">{code}</span>
                </div>)}
                {!filtered.length && <p className="country-picker-empty" role="status">{arabic ? "لا توجد نتائج مطابقة" : "No matching countries"}</p>}
            </div>
        </div>}
    </div>;
}
