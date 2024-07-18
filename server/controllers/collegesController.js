const db = require('../db');

exports.getUniqueInstituteTypes = (req, res) => {
    db.all('SELECT DISTINCT InstituteType FROM colleges', [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.json(rows.map(row => row.InstituteType));
    });
};

exports.getUniqueInstituteNames = (req, res) => {
    db.all('SELECT DISTINCT InstituteName FROM colleges', [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.json(rows.map(row => row.InstituteName));
    });
};

exports.getUniqueBranches = (req, res) => {
    db.all('SELECT DISTINCT Branch FROM colleges', [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.json(rows.map(row => row.Branch));
    });
};

exports.getUniqueClasses = (req, res) => {
    db.all('SELECT DISTINCT Class FROM colleges', [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.json(rows.map(row => row.Class));
    });
};

exports.getUniqueGenders = (req, res) => {
    db.all('SELECT DISTINCT Gender FROM colleges', [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.json(rows.map(row => row.Gender));
    });
};

exports.getUniqueCategories = (req, res) => {
    db.all('SELECT DISTINCT Category FROM colleges', [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.json(rows.map(row => row.Category));
    });
};

exports.getUniqueMPDomiciles = (req, res) => {
    db.all('SELECT DISTINCT MPDomicile FROM colleges', [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.json(rows.map(row => row.MPDomicile));
    });
};

const validInstituteTypes = [
    "Government Aided", "Government Autonomous", "Private", "University Owned", "Self Finance"
];
const validClasses = [
    "X", "S", "FF", "NCC", "H"
];
const validBranches = [
    "CSE", "IT", "Electronics and Telecommunications", "EI", "EE", "AIAIDS", "MECH", "AIML",
    "CSD", "ITIOT", "ITAIAR", "CE", "MAC", "IP", "EL", "AIADS", "CSEBC", "EEIOT", "INOT",
    "CHEM", "EC", "BM", "BEIL", "MTENG", "MINING", "CSEIML", "CSEDS", "CSEITCS", "CEng",
    "CSECS", "ELECT ELEX", "CSEAI", "CSIT", "ECACT", "CSEIL", "AIR", "CSERC", "CSEIT",
    "CSBS", "AUTO", "FTS", "CSEIOT", "EEVDT", "DS", "CSEAIADS", "AGE", "ARE", "CMPS",
    "ET", "PCT", "ECS", "CERE", "FOOD", "AG"
];
const validCategories = [
    "UR", "EWS", "OBC", "SC", "ST"
];
const validGenders = [
    "OP", "F", "M"
];
const validMPDomiciles = [
    "AI", "Y", "N"
];

const validTypes = {
    "InstituteType": validInstituteTypes,
    "Branch": validBranches,
    "Class": validClasses,
    "Gender": validGenders,
    "Category": validCategories,
    "MPDomicile": validMPDomiciles
};

exports.getInstituteDetails = (req, res) => {
    const { rank, filters } = req.body;

    if (!rank || !filters || Object.keys(filters).length === 0) {
        res.status(400).send('Rank and filters are required');
        return;
    }

    const conditions = [];
    const params = [];

    for (const key in filters) {
        if (validTypes[key]) {
            if (Array.isArray(filters[key])) {
                conditions.push(`${key} IN (${filters[key].map(() => '?').join(',')})`);
                params.push(...filters[key]);
            } else {
                conditions.push(`${key} = ?`);
                params.push(filters[key]);
            }
        } else {
            res.status(400).send(`Invalid filter parameter: ${key}`);
            return;
        }
    }

    const query = `
        SELECT * FROM colleges 
        WHERE ${conditions.join(' AND ')} AND ? BETWEEN OpeningRank AND ClosingRank
    `;
    params.push(rank);

    db.all(query, params, (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.json(rows);
    });
};

