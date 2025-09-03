import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'; // For rxjs 6

@Injectable({
    providedIn: 'root'
})
export class MyEventsService {
    private selectedLanguage = new Subject<{ lang: string, doNav: boolean; }>();
    private do = new Subject<string>();
    private issues = new Subject<{ child: string; data: string; }>();
    private adjustCredit = new Subject<{ service: string; credit: number; }>();

    constructor() { }

    public getLanguageObservable(): Observable<{ lang: string, doNav: boolean; }> {
        return this.selectedLanguage.asObservable();
    }

    public setLanguageData(data: string, doNav?: boolean) {
        this.selectedLanguage.next({ lang: data, doNav: doNav ?? true });
    }

    public getDoObservable(): Observable<string> {
        return this.do.asObservable();
    }

    public setDoData(data: string) {
        this.do.next(data);
    }

    public getAdjustCreditObservable(): Observable<{ service: string; credit: number; }> {
        return this.adjustCredit.asObservable();
    }

    public setAdjustCreditData(data: { service: string; credit: number; }) {
        this.adjustCredit.next(data);
    }

    public getIssuesObservable(): Observable<{ child: string; data: string; }> {
        return this.issues.asObservable();
    }

    public setIssuesData(data: { child: string; data: string; }) {
        this.issues.next(data);
    }
}
