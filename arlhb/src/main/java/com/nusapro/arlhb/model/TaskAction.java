package com.nusapro.arlhb.model;

public class TaskAction {
	private int taskActionId;
	private int taskId;
	private String actionName;

	public int getTaskActionId() {
		return taskActionId;
	}

	public void setTaskActionId(int taskActionId) {
		this.taskActionId = taskActionId;
	}

	public int getTaskId() {
		return taskId;
	}

	public void setTaskId(int taskId) {
		this.taskId = taskId;
	}

	public String getActionName() {
		return actionName;
	}

	public void setActionName(String actionName) {
		this.actionName = actionName;
	}

}
