// task_5/js/main.ts

interface MajorCredits {
    credits: number;
    _majorBrand: 'majorCredits';
}

interface MinorCredits {
    credits: number;
    _minorBrand: 'minorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _majorBrand: 'majorCredits'
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _minorBrand: 'minorCredits'
    };
}

