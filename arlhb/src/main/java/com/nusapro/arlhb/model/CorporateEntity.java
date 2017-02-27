package com.nusapro.arlhb.model;

public class CorporateEntity {

	private int corpEntityId;
	private int corpEntityParentId;
	private String corpEntityName;
	private int corpEntityLevelId;

	public int getCorpEntityId() {
		return corpEntityId;
	}

	public void setCorpEntityId(int corpEntityId) {
		this.corpEntityId = corpEntityId;
	}

	public int getCorpEntityParentId() {
		return corpEntityParentId;
	}

	public void setCorpEntityParentId(int corpEntityParentId) {
		this.corpEntityParentId = corpEntityParentId;
	}

	public String getCorpEntityName() {
		return corpEntityName;
	}

	public void setCorpEntityName(String corpEntityName) {
		this.corpEntityName = corpEntityName;
	}

	public int getCorpEntityLevelId() {
		return corpEntityLevelId;
	}

	public void setCorpEntityLevelId(int corpEntityLevelId) {
		this.corpEntityLevelId = corpEntityLevelId;
	}

}
